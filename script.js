let carrinho = [];

function adicionarCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoModal = document.getElementById('carrinho-modal');
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');

    itensCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = total.toFixed(2);

    if (carrinho.length > 0) {
        carrinhoModal.style.display = 'flex';
    }
}

function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

function mostrarCarrinho() {
    if (carrinho.length > 0) {
        document.getElementById('carrinho-modal').style.display = 'flex';
    }
}

function fecharCarrinho() {
    document.getElementById('carrinho-modal').style.display = 'none';
}
