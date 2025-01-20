import type { APIRoute } from 'astro';
import type * as NodeMailer from 'nodemailer';

// Rate limiting map
const RATE_LIMIT = new Map();

export const GET = () => {
 return new Response('Test API working!', { status: 200 });
};

export const POST: APIRoute = async ({ request }) => {
 try {
  console.log('Verificando variables de entorno');
    if (!import.meta.env.EMAIL_USER) throw new Error('EMAIL_USER no configurado');
    if (!import.meta.env.EMAIL_PASSWORD) throw new Error('EMAIL_PASSWORD no configurado');
    if (!import.meta.env.EMAIL_TO) throw new Error('EMAIL_TO no configurado');
   console.log('Iniciando procesamiento de email');
   
   // Rate limiting check
   const userIP = request.headers.get('x-forwarded-for') || 'unknown';
   const now = Date.now();
   const lastSubmission = RATE_LIMIT.get(userIP) || 0;

   if (now - lastSubmission < 60000) { // 1 minuto
     console.log('Rate limit alcanzado para IP:', userIP);
     return new Response(JSON.stringify({
       message: 'Por favor, espera un minuto antes de enviar otro mensaje'
     }), {
       status: 429,
       headers: {
         'Content-Type': 'application/json'
       }
     });
   }

   console.log('Obteniendo FormData');
   const formData = await request.formData();
   console.log('FormData recibido:', {
     name: formData.get('name'),
     email: formData.get('email'),
     hasMessage: !!formData.get('message')
   });

   const name = formData.get('name');
   const email = formData.get('email');
   const message = formData.get('message');

   // Validación de campos vacíos
   if (!name || !email || !message) {
     console.log('Campos vacíos detectados');
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
     console.log('Formato de email inválido');
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

   console.log('Configurando nodemailer');
   const nodemailer = (await import('nodemailer')).default;
   
   console.log('Creando transporter con:', {
     user: import.meta.env.EMAIL_USER,
     hasPass: !!import.meta.env.EMAIL_PASSWORD
   });

   const transporter = nodemailer.createTransport({
    service: 'gmail',  // En lugar de host y port
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false // Solo para debugging
    },
    debug: true
  });

   console.log('Verificando transporter');
   await transporter.verify();
   console.log('Transporter verificado');

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

   console.log('Enviando email');
   const info = await transporter.sendMail(mailOptions);
   console.log('Email enviado:', info);

   return new Response(JSON.stringify({
     message: 'Email enviado correctamente'
   }), {
     status: 200,
     headers: {
       'Content-Type': 'application/json'
     }
   });

  } catch (error: Error | unknown) {
    const err = error as Error;
    
    // Log más detallado del error
    console.error('Error completo:', {
      name: err.name,
      message: err.message,
      stack: err.stack,
      env: {
        hasUser: !!import.meta.env.EMAIL_USER,
        hasPass: !!import.meta.env.EMAIL_PASSWORD,
        hasTo: !!import.meta.env.EMAIL_TO
      }
    });
    
    return new Response(
      JSON.stringify({
        message: 'Error al enviar el email',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Error interno del servidor'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}