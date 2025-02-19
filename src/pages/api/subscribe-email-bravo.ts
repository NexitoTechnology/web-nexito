// src/pages/api/subscribe-email-bravo.ts
import type { APIRoute } from 'astro';

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';
const BREVO_EMAIL_URL = 'https://api.brevo.com/v3/smtp/email';

export const POST: APIRoute = async ({ request }) => {
  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY no está configurada');
    return new Response(
      JSON.stringify({ error: 'Error de configuración del servidor' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const data = await request.json();
    const { email, name, attributes } = data;

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email es requerido' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
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
      // Enviar email de confirmación con tracking
      const emailResponse = await fetch(BREVO_EMAIL_URL, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: {
            name: "Nexito",
            email: "no-reply@nexito.es"
          },
          to: [{
            email: email,
            name: name || email
          }],
          subject: "¡Gracias por suscribirte! Aquí está tu eBook",
          htmlContent: `
            <html>
              <body>
                <h1>¡Hola ${name || 'allí'}!</h1>
                <p>Gracias por suscribirte a nuestro newsletter.</p>
                <p>Aquí tienes el enlace para descargar tu eBook sobre Automatización Inteligente:</p>
                <p><a href="https://nexito.es/ebook.pdf" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-decoration: none; border-radius: 4px;">Descargar eBook</a></p>
                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
                <p>¡Saludos!</p>
                <p>El equipo de Nexito</p>
              </body>
            </html>
          `,
          tags: ["ebook-download", "welcome"],
          tracking: {
            opens: true,
            clicks: true,
            unsubscribe: true
          }
        })
      });

      if (!emailResponse.ok) {
        console.error('Error enviando email:', await emailResponse.json());
        // Aunque falle el email, no devolvemos error al usuario si el registro fue exitoso
      }
    }

    // 3. Manejar respuesta según el caso
    if (contactData.code === 'duplicate_parameter') {
      return new Response(
        JSON.stringify({ 
          message: 'Ya estás suscrito. ¡Gracias por tu interés!',
          status: 'duplicate'
        }), 
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: '¡Gracias por suscribirte! Revisa tu email.',
        status: 'success'
      }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Hubo un error al procesar tu suscripción.',
        status: 'error'
      }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}