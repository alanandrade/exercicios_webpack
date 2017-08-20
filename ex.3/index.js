const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return {...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'
novoProduto.preco = 5.25

console.log(produto, novoProduto)