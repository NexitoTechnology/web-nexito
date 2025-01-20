import type { APIRoute } from 'astro';
import type * as NodeMailer from 'nodemailer';

// Rate limiting map
const RATE_LIMIT = new Map();

export const POST: APIRoute = async ({ request }) => {
  try {
    // Rate limiting check
    const userIP = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const lastSubmission = RATE_LIMIT.get(userIP) || 0;

    if (now - lastSubmission < 60000) { // 1 minuto
      return new Response(JSON.stringify({
        message: 'Por favor, espera un minuto antes de enviar otro mensaje'
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validación de campos vacíos
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        message: 'Todos los campos son requeridos'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toString())) {
      return new Response(JSON.stringify({
        message: 'El formato del email no es válido'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Actualizar el rate limit
    RATE_LIMIT.set(userIP, now);

    const nodemailer = (await import('nodemailer')).default;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: import.meta.env.EMAIL_USER,
      to: import.meta.env.EMAIL_TO,
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({
      message: 'Email enviado correctamente'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    return new Response(JSON.stringify({
      message: 'Error al enviar el email'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}