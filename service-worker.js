//service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("cache-files-v1")
      .then((cache) =>
        cache.addAll([
          "/index.html",
          "/css/style.css",
          "/js/script.js"
        ])
      )
  );
});

