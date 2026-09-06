self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Não intercepta nenhuma requisição.
// GitHub Pages, Supabase e CDN acessam diretamente.
self.addEventListener('fetch', event => {
  return;
});
