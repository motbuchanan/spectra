/* Spectra service worker */
const CACHE = 'spectra-v2-2';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.host.includes('fonts.googleapis.com') || url.host.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.open(CACHE).then(async cache => {
        const cached = await cache.match(req);
        const network = fetch(req).then(res => { cache.put(req, res.clone()); return res; }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // App shell: network-first for index (so new builds land), cache-first for the rest
  if (req.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname.endsWith('/')) {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(h => h || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
