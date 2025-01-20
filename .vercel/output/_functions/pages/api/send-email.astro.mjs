export { renderers } from '../../renderers.mjs';

const config = {
  runtime: "nodejs"
  // o 'edge' dependiendo de tu infraestructura
};
const RATE_LIMIT = /* @__PURE__ */ new Map();
const GET = () => {
  return new Response("Test API working!", { status: 200 });
};
const POST = async ({ request }) => {
  try {
    console.log("Verificando variables de entorno");
    if (false) ;
    if (false) ;
    if (false) ;
    console.log("Iniciando procesamiento de email");
    const userIP = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const lastSubmission = RATE_LIMIT.get(userIP) || 0;
    if (now - lastSubmission < 6e4) {
      console.log("Rate limit alcanzado para IP:", userIP);
      return new Response(JSON.stringify({
        message: "Por favor, espera un minuto antes de enviar otro mensaje"
      }), {
        status: 429,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    console.log("Obteniendo FormData");
    const formData = await request.formData();
    console.log("FormData recibido:", {
      name: formData.get("name"),
      email: formData.get("email"),
      hasMessage: !!formData.get("message")
    });
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
      console.log("Campos vacíos detectados");
      return new Response(JSON.stringify({
        message: "Todos los campos son requeridos"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toString())) {
      console.log("Formato de email inválido");
      return new Response(JSON.stringify({
        message: "El formato del email no es válido"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    RATE_LIMIT.set(userIP, now);
    console.log("Configurando nodemailer");
    const nodemailer = (await import('nodemailer')).default;
    console.log("Creando transporter con:", {
      user: "adrianmartintoro@gmail.com",
      hasPass: true
    });
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      // Puerto seguro para SSL
      secure: true,
      // Usa SSL
      auth: {
        user: "adrianmartintoro@gmail.com",
        pass: "mraq xenn xikv gwyd"
        // Usa la contraseña de aplicación
      }
    });
    console.log("Verificando transporter");
    await transporter.verify();
    console.log("Transporter verificado");
    const mailOptions = {
      from: "adrianmartintoro@gmail.com",
      to: "admin@nexito.tech",
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
    console.log("Enviando email");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado:", info);
    return new Response(JSON.stringify({
      message: "Email enviado correctamente"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    const err = error;
    console.error("Error completo:", {
      name: err.name,
      message: err.message,
      stack: err.stack,
      env: {
        hasUser: true,
        hasPass: true,
        hasTo: true
      }
    });
    return new Response(
      JSON.stringify({
        message: "Error al enviar el email",
        error: process.env.NODE_ENV === "development" ? err.message : "Error interno del servidor"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  config
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
