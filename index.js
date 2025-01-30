const box = [
    {
        id: 1,
        img: "imagem",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit, harum numquam expedita quaerat.",
        titulo: "Não há tempo a perder",
        preco: "39,60",

    },
    {
        id: 1,
        img: "imagem",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit, harum numquam expedita quaerat.",
        titulo: "Não há tempo a perder",
        preco: "39,60",

    },
    {
        id: 1,
        img: "imagem",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit, harum numquam expedita quaerat.",
        titulo: "Não há tempo a perder",
        preco: "39,60",

    },
    {
        id: 1,
        img: "imagem",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit, harum numquam expedita quaerat.",
        titulo: "Não há tempo a perder",
        preco: "39,60",

    },
    {
        id: 4,
        img:"url"
    }
]

const boxRender = `
 <div class="box">
                    <div id="id" class="box-header">
                        <img src="img" alt="">
                        <span>
                           descricao
                            <a class="ler-mais" href="#">Ler mais...</a>
                        </span>
                    </div>
                    
                    <div class="box-text">
                        <h3>titulo</h3>
                        
                        <div class="buy">
                            <p><strong>R$</strong>preco</p>
                            <div class="btn-icon">
                                <button>comprar</button>
                                <a href="">
                                    <i class="bi bi-basket"></i>
                                </a>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
`