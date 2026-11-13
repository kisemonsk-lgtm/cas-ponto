/* Cache do app para funcionar no tablet/celular mesmo sem internet */
const CACHE = "cas-ponto-v3";
const ARQUIVOS = [
  "./",
  "./index.html",
  "./estilo.css",
  "./app.js",
  "./funcionarios.js",
  "./logo-cas.png",
  "./jspdf.umd.min.js",
  "./html2canvas.min.js",
  "./manifest.webmanifest",
  "./icone-192.png",
  "./icone-512.png",
  "./icone-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (ev) => {
  ev.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches.keys().then((chaves) => Promise.all(chaves.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (ev) => {
  if (ev.request.method !== "GET") return;
  ev.respondWith(
    caches.match(ev.request).then((resp) => {
      if (resp) return resp;
      return fetch(ev.request).then((r) => {
        const copia = r.clone();
        caches.open(CACHE).then((c) => c.put(ev.request, copia)).catch(() => {});
        return r;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
