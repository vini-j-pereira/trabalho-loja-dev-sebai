let nome = document.getElementById('nome');
let fone = document.getElementById('fone');
let email = document.getElementById('email');



// function salvarDados(event) {
//     event.preventDefault()

//     let recNome = nome.value
//     let recFone = fone.value
//     let recEmail = email.value

//     let user = {
//         nome: recNome,
//         fone: recFone,
//         email: recEmail,
//     }

//     dados.push(user)

//     alert(`Contato salvo com sucesso! ${user}`)

//     salvarDados()
// }


// function salvarLocal(){

//     if(localStorage.contatoForm){
//         dados = JSON.parse(localStorage.getItem('contatoForm'));
//     }
    
//     localStorage.contatoForm = JSON.stringify(dados);
// }

let dadosNome = [];
let dadosFone = [];
let dadosEmail = [];
let recNome
let recFone
let recEmail

function salvarDados(event) {
    event.preventDefault()

     recNome = nome.value
     recFone = fone.value
     recEmail = email.value

    // dadosNome.push(recNome)
    // dadosFone.push(recFone)
    // dadosEmail.push(recEmail)

    // alert("Dados Salvos com Sucesso!")

    alert(dadosNome)

    salvarLocal();

}

function salvarLocal(){

    if( localStorage.userNome){
        dadosNome = JSON.parse(localStorage.getItem('userNome'))
    } 

    if( localStorage.userFone){
        dadosFone = JSON.parse(localStorage.getItem('userFone'))
    }

    if( localStorage.userEmail){
        dadosEmail = JSON.parse(localStorage.getItem('userEmail'))
    }

    dadosNome.push(recNome)
    dadosFone.push(recFone)
    dadosEmail.push(recEmail)

    localStorage.userNome = JSON.stringify(dadosNome)
    localStorage.userFone = JSON.stringify(dadosFone)
    localStorage.userEmail = JSON.stringify(dadosEmail)
}
