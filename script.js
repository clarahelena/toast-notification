const botoes = document.querySelectorAll('.botao');
const lista = document.querySelector('.toast-lista');
//dados que seram colhidos com base no ID do botao selecionado.
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

//funçao que remove a toast adicionando a animação 'hide', limpando o timeout se houver um e removendo a toast apos um intervalo de 600ms.
function removerToast(toast) {
  toast.classList.add('hide');
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 600);
}

function criarToast(id) {
  const { icone, texto } = dadosToast[id]; //desestruturando para extrair o icone e texto do dadosToast.
  const toast = document.createElement('li'); //cria uma li.
  lista.appendChild(toast); //adiciona a li como filha da ul.
  toast.className = `toast ${id}`; //adiciona a classe de acordo com o argumento recebido.
  toast.innerHTML = `
  <div class="coluna">
  <i class='${icone}'></i>
  <span>${texto}</span></div>
  <i class="fa-solid fa-xmark" onclick="removerToast(this.parentElement)"></i>`; //insere o html dentro da li.
  toast.timeoutId = setTimeout(() => removerToast(toast), 5000); //armazena o id retornado pelo temporizador e aciona a funçao removerToast apos 5 segundos.
}
//adiciona o evento de click aos botoes que ira acionar a funçao anonima para chamar o criarToast e colhendo o id do botao.
botoes.forEach((botao) => {
  botao.addEventListener('click', () => criarToast(botao.id));
});
