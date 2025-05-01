const cacheName = 'smart-farm-cache-v1';

const offlineFiles = [
  '/',
  'index.html',
  'offline.html',
  'style1.css',
  'script.js',
];

// Install event: Cache all necessary files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(offlineFiles);
    })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== cacheName)
          .map(name => caches.delete(name))
      );
    })
  );
});

// Fetch event: Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then(response => {
        return response || caches.match('offline.html');
      });
    })
  );
});
