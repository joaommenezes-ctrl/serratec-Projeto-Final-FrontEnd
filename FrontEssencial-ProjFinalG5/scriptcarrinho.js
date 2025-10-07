import { carregarItensDoCarrinho } from "./scripts-carrinho/carregarItensDoCarrinho.js";

function isPaginaCarrinho() {
    return window.location.pathname.includes("/carrinho.html");
}

if (isPaginaCarrinho()) {
    carregarItensDoCarrinho();
}