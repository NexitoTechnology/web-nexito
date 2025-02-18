// src/pages/api/track.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  console.log("API called");  // Añade esto
  const data = await request.json();
  
  window.dataLayer.push({
    event: data.eventName,
    ...data.eventData
  });

  return new Response(JSON.stringify({ success: true }));
};