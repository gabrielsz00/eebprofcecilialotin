// Definindo os nomes de cada turma
const alunos3m = [
    "Camila da Silva Vier", "Cauan Stürmer", "Gabriel de Quadros Noviski", 
    "Kauan Rafael Manto", "Luan Fernando Straes", "Micheli Carolini Bender", 
    "Simony Gabriela Ferreira", "Tais de Souza Vizzotto"
  ];
  
const alunos2m = [
    "Amanda Eduarda Kozerski", "Amanda Luiza Boito", "Carine Paulino da Silva", 
    "Daniel Trevisan", "Eduardo Gabriel Zimmermann", "Guilherme Cechin Ribeiro", 
    "Ketlin Larissa da Silva", "Luana Gabriele Nunes de Arnote", "Luis Felipe Cescon Zorzi", 
    "Maria Clara Sarzi Lanzarin", "Mateus Paulino da Silva", "Renan Wismann Padilha", 
    "Samara Letícia da Silva"
  ];
  
const alunos1m = [
    "Amanda Medeiros Farias", "Artur Breier Pelozato", "Camila Nunes de Arnote", 
    "Carina de Campos do Amaral", "Danieli Regina Scapin", "Edimilson José de Campos", 
    "Giseli Dhein", "Laura Fernanda Machado", "Mateus Silvan Flores", 
    "Nicole de Lima Calegari", "Pamela Carolini Flores", "Renan Mateus Bender", 
    "Renan Vitor Nunes de Arnote", "Samuel Rost Zangalli", "Vinicius Carboni Pavanatto"
  ];
  
const alunos9 = [
    "Alana Brustolin Flores", "Alexia Ribeiro", "Ana Flavia Trevisan", 
    "Andrielly Carolini Flores", "Ariane Carolini Roloff", "Cauan Zangalli Balensiefer", 
    "Diavan Rohden", "Dionas Fernandes da Luz", "Gabriel Sturmer Zacaron", 
    "Gustavo Muryllo Gritti Diniz", "Gustawo Gorges Muhl", "Kauan Constantini de Lima", 
    "Kauane da Rosa Donada", "Luiz Eduardo Demari", "Maria Eduarda Dresch", 
    "Mariana Zanin Trevisan", "Pablo Henrique Porsch", "Patricia Cristina Trevisan", 
    "Rakely Cappellaro", "Tainá Emyli Becker", "Yasmim Cristina Coito Bomhard"
  ];
  
const alunos8 = [
    "Bruna da Rosa dos Santos", "Eduardo Inacio Dhein", "Eduardo Trevisan", 
    "Isabelly Constantini Barcellos", "Iuri Sturmer Favretto", "Jany Zimmermann Alves", 
    "João Gabriel Cescon Zorzi", "Kaike Mikael Flores", "Kemilly Vitoria Merlo da Silva", 
    "Kemily Eduarda Flores Argenta", "Stefany Maria Catto", "Victor Emanoel Goldani de Oliveira"
  ];
  
const alunos7 = [
    "Alanderson Ribeiro Morais dos Santos", "Arthur Kornowski Christofoli", "Bernardo Dresch", 
    "David Gabriel Carneiro", "Elyn Silvia Witcoski", "Emily Vitória Dresch", 
    "Fabricio Assis Brasil Cunha", "Gustavo Leonel Guaragni", "Hellen Gabriely da Silva Moraes", 
    "Heloisa da Rosa Donada", "Kauê Vitor Siqueira Regi", "Kauéli Braz Paula", 
    "Luis Felipe Rama", "Madalena Vitória Fernandes da Luz", "Murilo de Campos da Silva", 
    "Natalia Maria Callegari", "Nicolas Zilio", "Pablo Fernando Biseski", 
    "Samuel Cechin Ribeiro", "Suanny Pereira Garda", "Vitoria Cristina Reginatto", 
    "Vitoria de Souza Gattermann", "Yngrid Vitória de Campos Birkheuer"
  ];
  
const alunos6 = [
    "Andrei Luiz Scapin", "Dejanira Ferreira da Silva", "Enzo Gabriel Mittmann Brusco", 
    "Evandro Dhein", "Gabrieli Antunes de Quadros", "Guilherme Carvalho de Oliveira", 
    "Henrique dos Santos Witcoski", "Jaqueline Aparecida Stumm", "Jhenifer Silva dos Santos", 
    "João Vitor Lopes da Silva", "Júlia Cristina Fulber Pacini", "Kauã Straes", 
    "Lorenzo Sarzi Haas", "Lucas Anibal Brunel", "Lucas Fernando Chrestani Volken", 
    "Marcos Vinicios Tavella Bonatto", "Paola Cristina Flores", "Rafaela Trevisan", 
    "Ryan Gustavo Nunes de Arnote", "Vitória Alves de Quadros Noviski", "Wesley Rian da Silva Marcílio"
  ];
  

// Função para exibir alunos
function exibirAlunos(alunos) {
    const listaAlunos = document.getElementById('listaAlunos');
    listaAlunos.innerHTML = ''; // Limpa a lista
    alunos.sort(); // Ordena os alunos em ordem alfabética
    alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.textContent = aluno;
        listaAlunos.appendChild(li);
    });
}

// Evento para mudança de turma
const select = document.getElementById('select');
select.addEventListener('change', () => {
    const turmaSelecionada = select.value;
    if (turmaSelecionada === "3m") {
        exibirAlunos(alunos3m);
    } else if (turmaSelecionada === "2m") {
        exibirAlunos(alunos2m);
    } else if (turmaSelecionada === "1m") {
        exibirAlunos(alunos1m);
    } else if (turmaSelecionada === "9") {
        exibirAlunos(alunos9);
    } else if (turmaSelecionada === "8") {
        exibirAlunos(alunos8);
    } else if (turmaSelecionada === "7") {
        exibirAlunos(alunos7);
    } else if (turmaSelecionada === "6") {
        exibirAlunos(alunos6);
    } else {
        // Exibir todos os alunos de todas as turmas
        const todosAlunos = [...alunos3m, ...alunos2m, ...alunos1m, ...alunos9, ...alunos8, ...alunos7, ...alunos6];
        exibirAlunos(todosAlunos);
    }
});