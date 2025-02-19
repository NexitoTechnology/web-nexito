// src/pages/api/subscribe-email-bravo.ts
import type { APIRoute } from "astro";

import fs from 'fs/promises';
import path from 'path';

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3/contacts";
const BREVO_EMAIL_URL = "https://api.brevo.com/v3/smtp/email";

export const POST: APIRoute = async ({ request }) => {
  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY no está configurada");
    return new Response(
      JSON.stringify({ error: "Error de configuración del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const data = await request.json();
    const { email, name, attributes } = data;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email es requerido" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

   // 1. Registrar el contacto en Brevo
   const contactResponse = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': BREVO_API_KEY
    },
    body: JSON.stringify({
      email,
      attributes: {
        NOMBRE: name,
        ...attributes
      },
      listIds: [2],
      updateEnabled: true
    })
  });

  const contactData = await contactResponse.json();

  // 2. Si el contacto se registró o ya existía, enviamos el email
  if (contactResponse.ok || contactData.code === 'duplicate_parameter') {
    try {
      // Leer la plantilla
      const templatePath = path.join(process.cwd(), 'src', 'emails', 'welcome.html');
      let template = await fs.readFile(templatePath, 'utf-8');
      
      // Reemplazar variables
      template = template.replace('{{name}}', name || 'futuro experto');
      template = template.replace('{{year}}', new Date().getFullYear().toString());

      // Enviar email de confirmación
      const emailResponse = await fetch(BREVO_EMAIL_URL, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: {
            name: "Nexito Technology",
            email: "info@nexito.tech"
          },
          to: [{
            email: email,
            name: name || email
          }],
          subject: "¡Gracias por suscribirte! Aquí está tu eBook",
          htmlContent: template,
          tags: ["ebook-download", "welcome"],
          tracking: {
            opens: true,
            clicks: false,
            unsubscribe: true
          }
        })
      });

      if (!emailResponse.ok) {
        console.error('Error enviando email:', await emailResponse.json());
        // Aunque falle el email, no devolvemos error al usuario si el registro fue exitoso
      }
    } catch (error) {
      console.error('Error leyendo la plantilla o enviando el email:', error);
    }
  }

    // 3. Manejar respuesta según el caso
    if (contactData.code === "duplicate_parameter") {
      return new Response(
        JSON.stringify({
          message: "Ya estás suscrito. ¡Gracias por tu interés!",
          status: "duplicate",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        message: "¡Gracias por suscribirte! Revisa tu email.",
        status: "success",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Hubo un error al procesar tu suscripción.",
        status: "error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
