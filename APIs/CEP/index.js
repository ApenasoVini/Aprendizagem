   let nome, cep, rua, bairro, cidade, estado, pais
    function defineCampos() {
    
        nome = document.getElementById("nome");
        cep = document.getElementById("cep");
        rua = document.getElementById("rua");
        bairro = document.getElementById("bairro");
        cidade = document.getElementById("cidade");
        estado = document.getElementById("estado");
        pais = document.getElementById("pais");
if (cep.value.length == 8){
    return true;
}
    return false;
}
    function buscaEndereco() {
        if (defineCampos()){
        var cepValido = cep.value.substr(0, 5) + "-" + cep.value.substr(5);
        var url = "https://my-json-server.typicode.com/pedroo-nietoo/aprendizagem-Industrial/cep/?code="+ cepValido
        fetch(url)
            .then(res => res.json())
            .then(data => {
                rua.value = data[0].address;
                bairro.value = data[0].district;
                cidade.value = data[0].city;
                estado.value = data[0].state;
                pais.value = "Brasil";   
            })
        }
        else{
            alert("CEP inválido!")
        }
    }
function cadastro(){
    defineCampos()
    var pessoa = {
        nome: nome,
        cep: cep.value,
        rua: rua.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        pais: pais.value   
    }
    var lista = JSON.parse(localStorage.getItem("Pessoas"))
    if(lista == null){
        lista = []
    } 
    lista.push(pessoa)
    localStorage.setItem("Pessoas", JSON.stringify(lista))
    alert("Usuário cadastrado")
}
