let imgUrl = document.getElementById("imgUrl");
let titulo = document.getElementById("titulo");
let preco = document.getElementById("preco");
let descricao = document.getElementById("descricao");

let produtoBox = JSON.parse(localStorage.getItem("@newBox")) || [];

function enviarBox(event){
    event.preventDefault();

    let novaUrl = imgUrl.value;
    let novoTitulo = titulo.value;
    let novoPreco = preco.value;
    let novaDescricao = descricao.value;

    let novoBox = {
        url: novaUrl,
        titulo: novoTitulo,
        preco: novoPreco,
        descri: novaDescricao
    }

    produtoBox.push(novoBox);

    alert('Novo Box salvo com sucesso!')

    salvarBoxLocal();
}

function salvarBoxLocal() {

    localStorage.setItem("@newBox", JSON.stringify(produtoBox));
}