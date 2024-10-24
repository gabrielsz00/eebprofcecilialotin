// Definindo os nomes de cada turma
const alunos3m = ["João", "Maria", "Fernanda"];
const alunos2m = ["Ana", "Carlos", "Pedro"];
const alunos1m = ["Bruno", "Juliana", "Lucas"];
const alunos9 = ["Fabiana", "Gabriel", "Rafael"];
const alunos8 = ["Carla", "Rogério", "Tatiana"];
const alunos7 = ["Paulo", "Sandra", "Bianca"];
const alunos6 = ["Daniel", "Gustavo", "Amanda"];

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