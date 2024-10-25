// Lista de eventos
const eventos = [
    
    { dia: 12, mes: 10, ano: 2024, titulo: 'Nossa Senhora Aparecida' },
    { dia: 15, mes: 10, ano: 2024, titulo: 'Dia do Professor' },
    { dia: 17, mes: 10, ano: 2024, titulo: 'Viagem 8º e 9º Itá e Seara' },
    { dia: 19, mes: 10, ano: 2024, titulo: 'OBMEP' },
    { dia: 30, mes: 10, ano: 2024, titulo: 'Intercâmbio Santa Rita' }
];

// Função para gerar o calendário
function gerarCalendario(mes, ano) {
    const diasNoMes = new Date(ano, mes, 0).getDate(); // Total de dias no mês
    const primeiroDiaDaSemana = new Date(ano, mes - 1, 1).getDay(); // Dia da semana do 1º dia do mês
    const tbody = document.querySelector('#calendarioTable tbody');
    
    tbody.innerHTML = ''; // Limpar o calendário anterior

    let linha = document.createElement('tr');
    // Preencher os primeiros dias vazios até o primeiro dia da semana
    for (let i = 0; i < primeiroDiaDaSemana; i++) {
        let vazio = document.createElement('td');
        linha.appendChild(vazio);
    }

    // Preencher os dias do mês
    for (let dia = 1; dia <= diasNoMes; dia++) {
        if (linha.children.length === 7) {
            tbody.appendChild(linha);
            linha = document.createElement('tr');
        }

        const td = document.createElement('td');
        td.textContent = dia;

        // Verificar se existe evento neste dia
        const eventoDoDia = eventos.find(evento => evento.dia === dia && evento.mes === mes && evento.ano === ano);
        if (eventoDoDia) {
            td.classList.add('evento');
            const eventoSpan = document.createElement('span');
            eventoSpan.textContent = `${eventoDoDia.titulo}`;
            eventoSpan.classList.add('evento-titulo');
            td.appendChild(eventoSpan); // Adiciona o nome do evento diretamente no dia
        }

        linha.appendChild(td);
    }

    // Adicionar a última linha ao tbody
    tbody.appendChild(linha);
}

// Chamar a função para gerar o calendário de outubro 2024
gerarCalendario(10, 2024);