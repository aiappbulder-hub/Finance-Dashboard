const CACHE = 'findash-v8';
const STATIC = ['./manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isLocal = url.origin === self.location.origin;
  const isHTML = e.request.mode === 'navigate' ||
                 url.pathname === '/' ||
                 url.pathname.endsWith('/') ||
                 url.pathname.endsWith('.html');

  if (isLocal && isHTML) {
    // Always fetch fresh HTML — never serve index.html from cache
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
  } else if (isLocal) {
    // Cache-first for manifest, icon etc
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }))
    );
  } else {
    // Network-first for CDN (fonts, React etc), cache as fallback
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  }
});
