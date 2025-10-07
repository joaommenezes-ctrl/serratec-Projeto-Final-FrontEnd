function calcularTotalDoCarrinho() {

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        return 0;
    }

    const total = carrinho.reduce((acumulador, itemAtual) => {
        const precoString = itemAtual.preco;

        const precoLimpo = precoString.replace(',', '.');

        const precoNumerico = parseFloat(precoLimpo);

        return acumulador + precoNumerico;

    }, 0);

    return total;
}

const valorTotal = calcularTotalDoCarrinho();

const elementoTotal = document.getElementById('total-carrinho');

if (elementoTotal) {
    elementoTotal.innerText = `R$ ${valorTotal.toFixed(2)}`;
}

console.log(JSON.parse(localStorage.getItem('carrinho')));

function finalizarCompra() {
    const valorTotal = calcularTotalDoCarrinho();
    const valorFormatado = valorTotal.toFixed(2).replace('.', ',');
    const mensagem = `Sua compra foi confirmada e nossas corujas já estão à caminho! O valor total da compra foi de R$${valorFormatado} e o pagamento é no ato do recebimento. Harry Pobre agradece a sua compra!`;

    alert(mensagem);
    localStorage.removeItem('carrinho');
    location.reload();
}