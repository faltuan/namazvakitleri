self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("fgold-cache").then((cache) => {
            return cache.addAll([
                "/fgoldprices.github.io/",
                "/fgoldprices.github.io/index.html",
                "/fgoldprices.github.io/icon-512.png",
                "/fgoldprices.github.io/manifest.json"
            ]);
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
