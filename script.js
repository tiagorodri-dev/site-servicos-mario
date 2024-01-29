const form = document.querySelector('.fale-conosco')
const background = document.querySelector('.mascara-form')

// função que traz visibilidade ao formulário
function showForm() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    background.style.visibility = 'visible'
}

// função que deixa o formulário invisível
function hideForm() {
    form.style.left = '-350px'    
    background.style.visibility = 'hidden'
}


// Consumo da API Via Cep

// função para limpar valores do input
function limpar() {
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('rua').value=("");
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

// função de busca dos dados
function buscarCEP(valor) {
    var cep = valor.replace(/\D/g, '');

    if(cep != ""){
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('rua').value = "...";

            var script = document.createElement('script');

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