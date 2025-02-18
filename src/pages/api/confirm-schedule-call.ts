// src/pages/api/confirm-schedule-call.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response("Esta ruta API solo acepta POST", { status: 405 });
};

export const POST: APIRoute = async ({ request }) => {
  console.log("API called");  // Añade esto
  const data = await request.json();
  
  window.dataLayer.push({
    event: data.eventName,
    ...data.eventData
  });

  return new Response(JSON.stringify({ success: true }));
};