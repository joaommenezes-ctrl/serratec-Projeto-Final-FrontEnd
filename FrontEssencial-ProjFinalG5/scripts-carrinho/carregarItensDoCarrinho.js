// Função para carregar os itens do carrinho do localStorage
export function carregarItensDoCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const listaCarrinho = document.getElementById("carrinho");

  console.log(carrinho)

  carrinho.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "item-list";

    const itemContent = `
      <div class="cartao" id="carrinho">
      <div class="cartao-content">
        <img class="img-content" src="${item.imagem}">
        <div class="cartao-texto">
          <div><p>${item.nome}</p></div>
          <div><p>R$${item.preco}</p></div>
        </div>
      </div>
      <i class="fa-solid fa-trash" onClick=removerDoCarrinho(${item.id})></i>
    </div>
    `;

    listItem.innerHTML = itemContent;
    listaCarrinho.appendChild(listItem);

    // const deleteButton = listItem.querySelector(".delete");
    // deleteButton.addEventListener("click", () => {
    //   const confirmacao = confirm("Tem certeza que deseja excluir esse item?");
    //   if (confirmacao) {
    //     listaSacola.removeChild(listItem); // Remove o item da lista visualmente
    //     removerProdutoDoLocalStorage(item.nome); // Remove o item do localStorage
    //   }
    // });

  });
}
