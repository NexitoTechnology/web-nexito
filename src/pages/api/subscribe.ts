import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { email } = data;

  try {
    // Aquí implementa la lógica para guardar el email
    // Por ejemplo, usando un servicio como Mailchimp, ConvertKit, etc.
    
    return new Response(JSON.stringify({
      message: 'Suscrito exitosamente'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      message: 'Error al procesar la suscripción'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};