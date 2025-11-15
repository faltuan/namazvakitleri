self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("fgold-cache").then((cache) => {
      return cache.addAll(["/namazvakitleri/index.html", "/namazvakitleri/icon-512.png", "/namazvakitleri/manifest.json"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
