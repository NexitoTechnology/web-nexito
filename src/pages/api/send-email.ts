import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Importación dinámica de nodemailer
    const nodemailer = (await import('nodemailer')).default;

    // Configurar el transportador de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASSWORD
      }
    });

    // Configurar el email
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

    // Enviar el email
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