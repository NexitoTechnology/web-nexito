// src/pages/api/subscribe.ts
import type { APIRoute } from 'astro';

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email, name } = data;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email es requerido' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        attributes: {
          NOMBRE: name
        },
        listIds: [2] // Reemplaza con tu ID de lista
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Si el contacto ya existe, lo consideramos éxito
      if (responseData.code === 'duplicate_parameter') {
        return new Response(JSON.stringify({ 
          message: 'Ya estás suscrito. ¡Gracias por tu interés!' 
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      throw new Error(responseData.message || 'Error al suscribir');
    }

    return new Response(JSON.stringify({ 
      message: '¡Gracias por suscribirte! Revisa tu email.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      error: 'Hubo un error al procesar tu suscripción. Por favor, intenta de nuevo.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}