// Nome da key onde ficaram guardados os arquivos
const staticBurgerIo = "cecilia-lotin"

// Lista de aquivos para ser salvos em cache
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/horarios.html",
    "/horarios.css",
    "/horarios.js",
    "/calendario.html",
    "/calendario.css",
    "/calendario.js",
    "/alunos.html",
    "/alunos.css",
    "/alunos.js",
    "/redes.html",
    "/redes.css",
    "/assets/1.png",
    "/assets/2.png",
    "/assets/3.png",
    "/assets/6.png",
    "/assets/7.png",
    "/assets/8.png",
    "/assets/9.png",
    "/assets/facebook.png",
    "/assets/instagram.png",
    "/assets/logo.png",
    "/assets/medias.jpg",
    "/assets/viagem.jpg",

]

// Salva os arquivos listados em cache
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBurgerIo).then(cache => {
            cache.addAll(assets)
        })
    )
})

// Trazemos os dados salvos em cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})