self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('solid-v1').then((cache) => cache.addAll([
      './index.html',
      './manifest.json',
      './10679.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
