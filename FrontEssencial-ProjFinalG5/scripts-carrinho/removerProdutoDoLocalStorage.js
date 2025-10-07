function removerDoCarrinho(idPocao) {

    const confirmacao = window.confirm("Deseja mesmo remover este produto do carrinho?");

    if (!confirmacao) {
        alert("Exclusão cancelada.");
        return;
    }
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const novoCarrinho = carrinho.filter(item => item.id !== idPocao);

    if (novoCarrinho.length < carrinho.length) {
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
        alert(`Produto removido do carrinho.`); 
        location.reload();
    }
}