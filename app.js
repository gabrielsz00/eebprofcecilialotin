
// Registro do Service Worker
// Verificação se ele é suportado pelo browser
// Quando a pagina é carregada fazemos o registro
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}

self.addEventListener("install", installEvent => {
    console.log("Service Worker: Install event triggered.");
    installEvent.waitUntil(
        caches.open(staticBurgerIo).then(cache => {
            console.log("Service Worker: Caching assets");
            cache.addAll(assets);
        })
    );
});