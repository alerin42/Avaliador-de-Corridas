const CACHE = 'avaliador-v3-manual';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./sw.js'];
self.addEventListener('install', (e)=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); });
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return resp;
    }).catch(() => r || new Response('Offline', { status: 503, statusText: 'Service Unavailable' })))
  );
});
