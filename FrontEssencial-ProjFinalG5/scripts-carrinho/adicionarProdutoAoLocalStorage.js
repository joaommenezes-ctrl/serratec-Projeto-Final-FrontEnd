async function lerPocoes() {
  try {
    const response = await fetch('/json/pocoes.json');

    if (!response.ok) {
      throw new Error(`Erro ao buscar o arquivo: ${response.status}`);
    }

    const data = await response.json();

    return data.pocoes;

  } catch (error) {
    console.error('Houve um problema com a operação fetch:', error);
    return null;
  }
}

async function adicionarAoCarrinho(idDaPocao) {
  let usuarioLogado = localStorage.getItem('user');

  if (!usuarioLogado) {
    alert ("É preciso estar logado para adicionar itens ao carrinho!");
    return;
  }
  const pocoes = await lerPocoes();
  if (!pocoes) {
    return;
  }


  const pocaoEncontrada = pocoes.find(pocao => pocao.id === idDaPocao);

  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const jaEstaNoCarrinho = carrinho.some(item => item.id === idDaPocao);

  if (!jaEstaNoCarrinho) {
    carrinho.push(pocaoEncontrada);
    alert(`"${pocaoEncontrada.nome}" adicionada ao carrinho.`);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  } else {
    alert(`"${pocaoEncontrada.nome}" já está no carrinho.`);
  }
}
