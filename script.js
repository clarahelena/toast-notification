const botoes = document.querySelectorAll('.botao');
const lista = document.querySelector('.toast-lista');
const dadosToast = {
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

function removerToast(toast) {
  toast.classList.add('hide');
  setTimeout(() => toast.remove(), 600);
}

function criarToast(id) {
  const { icone, texto } = dadosToast[id];
  const toast = document.createElement('li');
  lista.appendChild(toast);
  toast.className = `toast ${id}`;
  toast.innerHTML = `
  <div class="coluna">
  <i class='${icone}'></i>
  <span>${texto}</span></div>
  <i class="fa-solid fa-xmark"></i>`;
  setTimeout(() => removerToast(toast), 5000);
}
botoes.forEach((botao) => {
  botao.addEventListener('click', () => criarToast(botao.id));
});
