import type { MiddlewareHandler } from 'astro';

const htmlCache = new Map<string, { html: Response; timestamp: number }>();
const CACHE_TTL = 30 * 1000; // 30 segundos

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = context.url.pathname;

  if (
    context.request.method !== 'GET' ||
    url.startsWith('/api') ||
    url.match(/\.(js|css|png|jpg|jpeg|webp|svg|ico|json|woff2?)$/)
  ) {
    return next();
  }

  const cached = htmlCache.get(url);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL) {
    const cloned = cached.html.clone();
    cloned.headers.set('x-cache', 'HIT');
    return cloned;
  }

  const response = await next();

  if (response.headers.get('content-type')?.includes('text/html')) {
    response.headers.set('x-cache', 'MISS');
    htmlCache.set(url, {
      html: response.clone(),
      timestamp: now,
    });
  }

  return response;
};
