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
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: {
          NOMBRE: name,
          ...attributes,
        },
        listIds: [2],
        updateEnabled: true,
      }),
    });

    // Añadimos logs para debug
    console.log("Status:", contactResponse.status);
    console.log("Status Text:", contactResponse.statusText);

    const responseText = await contactResponse.text();
    console.log("Response Text:", responseText);

    let contactData;
    try {
      contactData = responseText ? JSON.parse(responseText) : {};
    } catch (parseError) {
      console.error("Error parsing response:", parseError);
      return new Response(
        JSON.stringify({
          error: "Error en la respuesta del servidor",
          details: responseText,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Si el contacto se registró o ya existía, enviamos el email
    if (contactResponse.ok || contactData.code === "duplicate_parameter") {
      
      // Enviar email de confirmación con tracking
      const emailResponse = await fetch(BREVO_EMAIL_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: "Nexito Technology",
            email: "info@nexito.tech",
          },
          to: [
            {
              email: email,
              name: name || email,
            },
          ],
          subject: "¡Gracias por suscribirte! Aquí está tu eBook",
          htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px;">
    <!-- Header con logo -->
    <div style="text-align: center; padding: 20px;">
      <img src="https://nexito.tech/Logo.svg" alt="Nexito Technology" style="max-width: 200px; height: auto;">
    </div>

    <!-- Contenido principal -->
    <div style="padding: 20px; background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; border-radius: 8px; margin-bottom: 20px;">
      <h1 style="margin: 0; font-size: 24px; color: white;">¡Bienvenido/a a la innovación, ${name}! 🚀</h1>
      <p style="font-size: 16px; line-height: 1.5; margin-top: 15px;">
        ¡Qué alegría tenerte con nosotros! Has dado el primer paso hacia la transformación digital de tu empresa, y queremos agradecerte tu confianza con un regalo muy especial.
      </p>
    </div>

    <!-- Sección de descarga -->
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #1e3a8a; font-size: 20px; margin-top: 0;">Tu viaje hacia la automatización comienza aquí 🎯</h2>
      <p style="color: #475569; line-height: 1.5;">
        Hemos condensado años de experiencia y conocimiento en este eBook exclusivo. No es solo una guía, es tu compañero en el camino hacia la eficiencia operativa.
      </p>
      <div style="text-align: center; margin: 25px 0;">
        <a href="https://nexito.tech/download-ebook-index/" 
           style="background-color: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; transition: background-color 0.3s;">
           ¡Quiero empezar ya! 📚
        </a>
      </div>
    </div>

    <!-- Características del eBook -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #1e3a8a; font-size: 18px;">Lo que te espera en esta aventura:</h3>
      <ul style="color: #475569; padding-left: 20px; line-height: 1.6;">
        <li>🔄 +500 procesos que revolucionarán tu día a día</li>
        <li>💡 Historias reales de empresas que ya dieron el salto</li>
        <li>🎯 Templates que podrás implementar hoy mismo</li>
        <li>🚀 Guías paso a paso para no perderte nada</li>
      </ul>
    </div>

    <!-- Mensaje personal -->
    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <p style="color: #1e3a8a; line-height: 1.6; margin: 0;">
        "<em>La automatización no es el futuro, es el presente. Y ahora tú formas parte de él. Estamos aquí para acompañarte en cada paso del camino.</em>"
      </p>
      <p style="color: #1e3a8a; text-align: right; margin: 10px 0 0; font-weight: bold;">
        - El equipo de Nexito Technology
      </p>
    </div>

    <!-- Contacto -->
    <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 20px;">
      <p style="color: #64748b; font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
        ¿Dudas? ¿Ideas? ¿Ganas de compartir tu experiencia? Estamos a solo un mensaje de distancia:
      </p>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="color: #64748b; font-size: 14px; margin-bottom: 5px;">
          📧 <a href="mailto:info@nexito.tech" style="color: #2563eb; text-decoration: none;">info@nexito.tech</a>
        </li>
        <li style="color: #64748b; font-size: 14px;">
          📞 <a href="tel:+34950794543" style="color: #2563eb; text-decoration: none;">+34 950 79 45 43</a>
        </li>
      </ul>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
      <p style="color: #94a3b8; font-size: 12px;">
        ©  ${new Date().getFullYear()} Nexito Technology. Todos los derechos reservados.
      </p>
      <p style="color: #94a3b8; font-size: 12px;">
        C/ Lira 8, N36, 04648 Almería, España
      </p>
    </div>
  </div>
</body>
</html>`,
          tags: ["ebook-download", "welcome"],
          tracking: {
            opens: true,
            clicks: true,
            unsubscribe: true,
          },
        }),
      });

      if (!emailResponse.ok) {
        console.error("Error enviando email:", await emailResponse.json());
        // Aunque falle el email, no devolvemos error al usuario si el registro fue exitoso
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
