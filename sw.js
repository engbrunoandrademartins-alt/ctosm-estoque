self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Não intercepta nenhuma requisição.
  // O navegador acessará diretamente GitHub,
  // Supabase, CDN e demais serviços.
});
