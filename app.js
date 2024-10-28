// const main = document.querySelector('#allmain');

// const publicacoes = [
//     {   titulo: 
//         'Estudantes dos Anos Finais realizam viagem de estudo interdisciplinar a Itá e Seara/SC', 
//         data: 
//         '18.00', 
//         imagem: 
//         'viagem.jpg', 
//         descricao: 
//         'Os estudantes do 8º e 9º ano – Anos Finais do Ensino Fundamental, com os professores, realizam viagem de estudo, com o objetivo de proporcionar uma experiência educacional interdisciplinar e enriquecedora, aliando o aprendizado teórico e prático sobre a história, cultura, geografia, economia e meio ambiente de Itá e Seara/SC, promovendo a conscientização ambiental e cultural, bem como, a integração social dos estudantes.'},

//     {   titulo: 
//         '9º Ano Apresenta "O Rei da Vela" e Explora Crítica Social do Brasil dos Anos 1930', 
//         data: 
//         '18.00', 
//         imagem: 
//         'viagem.jpg', 
//         descricao: 
//         ''},

//         {   titulo: 
//             'Estudantes dos Anos Finais realizam viagem de estudo interdisciplinar a Itá e Seara/SC', 
//             data: 
//             '18.00', 
//             imagem: 
//             'viagem.jpg', 
//             descricao: 
//             ''},
            


// ]

// document.addEventListener('DOMContentLoaded', () => {
//     let output = '';
//     publicacoes.forEach(({name, price, image}) => {
//         output += `<div class="item-card">
//     <img src="assets/${image}" alt="">

//     <div class="card-content">
//         <h2>${name}</h2>

//         <p class="item-price">R$ ${price}</p>

//         <div class="item-raiting">
//             <i class='bx bxs-star' ></i>
//             <i class='bx bxs-star' ></i>
//             <i class='bx bxs-star' ></i>
//             <i class='bx bxs-star' ></i>
//             <i class='bx bxs-star-half' ></i>
//         </div>

//         <div class="item-option">
//             <a href="item_detail.html?name=${name}&price=${price}&image=${image}" class="option-details">Ver detalhes</a>
//             <div class="icon-option">
//                 <i class='bx bx-chat' ></i>
//             </div>
//             <div class="icon-option">
//                 <i class='bx bx-heart' ></i>  
//             </div>
//         </div>
//     </div>
// </div>`
//     })


//     main.innerHTML = output
// })











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