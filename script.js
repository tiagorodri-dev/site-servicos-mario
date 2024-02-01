AOS.init();

const formulario = document.querySelector(".formulario-fale-conosco")
const mascaraFormulario = document.querySelector(".mascara-formulario")

function aparecerFormulario() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    formulario.style.transition = "1.5s linear"
    mascaraFormulario.style.visibility = "visible"    
}

function retirarFormulario() {
    formulario.style.left = "-100%"
    formulario.style.transform = "translateX(0)"
    mascaraFormulario.style.visibility = "hidden"
}
// função para alterar a visibilidade do formulário
// const entreContato = document.querySelector(".entre-em-contato");

// entreContato.addEventListener('click', () => {
//     entreContato.style
//     console.log('botão clicado!')
// });


// Consumo da API Via Cep

// função de busca dos dados
function buscarCEP(valor) {
    let cep = valor.replace(/\D/g, '');

    if(cep != ""){
        let validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('rua').value = "...";

            let script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=chamada';

            document.body.appendChild(script);
        }
        else {
            limpar();
            alert("Formato de CEP inválido");
        }
    }
    else {
        limpar();
    }
}

// função para preencher os campos com os dados capturados da API
function chamada(conteudo){
    if(!("erro" in conteudo)) {
        document.getElementById("cidade").value=(conteudo.localidade);
        document.getElementById("uf").value=(conteudo.uf);
        document.getElementById("bairro").value=(conteudo.bairro);
        document.getElementById("rua").value=(conteudo.logradouro);
    }
    else {
        limpar();
        alert("CEP não encontrado!");
    }
}

// função para limpar valores do input
function limpar() {
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('rua').value=("");
}