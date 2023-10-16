const frutas = ['Maçã', 'Pera', 'Banana'];

// Função para adicionar frutas à lista
function adicionarFruta() {
    const inputElement = document.getElementById('frutaInput');
    const novaFruta = inputElement.value;

    if (novaFruta !== '') {
        frutas.push(novaFruta);
        atualizarLista();
    }

    inputElement.value = ''; // Limpa o campo de texto
}

// Função para atualizar a lista de frutas na página
function atualizarLista() {
    const ulElement = document.querySelector('ul');
    ulElement.innerHTML = ''; // Limpa a lista existente

    frutas.forEach(fruta => {
        const liElement = document.createElement('li');
        liElement.textContent = fruta;
        ulElement.appendChild(liElement);
    });
}

// Atualize a lista quando a página for carregada
document.addEventListener('DOMContentLoaded', atualizarLista);