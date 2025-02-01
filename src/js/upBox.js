let imgUrl = document.getElementById("imgUrl");
let titulo = document.getElementById("titulo");
let preco = document.getElementById("preco");
let descricao = document.getElementById("descricao");

let produtoBox = JSON.parse(localStorage.getItem("@newBox")) || [];
carregarBox();

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

    carregarBox();
}

function salvarBoxLocal() {

    localStorage.setItem("@newBox", JSON.stringify(produtoBox));
}

function carregarBox(){
    const containerBox = document.getElementById("containerBox");
    containerBox.innerHTML = "",

    produtoBox.map((item) => {
        const card = document.createElement("div");
        card.className = "box";

        card.innerHTML = `
                    <div class="box-header">
                        <img src="${item.url}">
                        <span>
                            ${item.descri}
                            <a class="ler-mais" href="#">Ler mais...</a>
                        </span>
                    </div>
                    
                    <div class="box-text">
                        <h3>${item.titulo}</h3>
                        
                        <div class="buy">
                            <p><strong>R$</strong>${item.preco}</p>
                            <div class="btn-icon">
                                <button>comprar</button>
                                <a href="">
                                    <i class="bi bi-basket"></i>
                                </a>
                            </div>
                        </div>
                    </div>
        `;

        containerBox.appendChild(card);
    })
}