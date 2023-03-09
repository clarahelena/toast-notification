const botoes = document.querySelectorAll('.botao');
const lista = document.querySelector('.toast-lista');
const objetos = {
  sucesso: {
    icone: 'fa-solid fa-circle-check',
    texto: 'Sucesso Toast.',
  },
  erro: {
    icone: 'fa-solid fa-circle-check',
    texto: 'Erro Toast.',
  },
  aviso: {
    icone: 'fa-solid fa-circle-check',
    texto: 'Aviso Toast.',
  },
  info: {
    icone: 'fa-solid fa-circle-check',
    texto: 'Informação Toast.',
  },
};

function criarToast(id) {
  const { icone, texto } = objetos[id];
  const item = document.createElement('li');
  lista.appendChild(item);
  item.className = `toast ${id}`;
  item.innerHTML = `
  <div class="coluna">
  <i class='${icone}'></i>
  <span>${texto}</span></div>
  <i class="fa-solid fa-xmark"></i>`;
}
botoes.forEach((botao) => {
  botao.addEventListener('click', () => criarToast(botao.id));
});
