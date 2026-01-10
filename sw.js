const CACHE_NAME = 'nasser-system-v1';
const assets = [
  './',
  './index.html'
];

// تثبيت ملفات النظام في ذاكرة الجهاز
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// جلب البيانات من الذاكرة عند انقطاع الإنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
