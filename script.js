

const form = document.querySelector('.fale-conosco')
const background = document.querySelector('.mascara-form')

function showForm() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    background.style.visibility = 'visible'
}

function hideForm() {
    form.style.left = '-350px'    
    background.style.visibility = 'hidden'
}

function limpar() {
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('rua').value=("");
}

function chamada(conteudo){
    if(!("erro" in conteudo)) {
        document.getElementById("cidade").value=(conteudo.localidade);
        document.getElementById("uf").value=(conteudo.uf);
        document.getElementById("bairro").value=(conteudo.bairro);
        document.getElementById("rua").value=(conteudo.logradouro);
    }
    else 
        limpar();
        alert("CEP não encontrado!");
}

function buscarCEP(valor) {
    var cep = valor.replace(/\D/g, '');

    if(cep != ""){
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

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