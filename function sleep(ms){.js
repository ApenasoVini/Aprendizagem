function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {
    for (let i = 0; i > 0; i--) {
        alert(`Aguarde ${i} segundos...`);
        await sleep(i * 100);
    }
    alert(`Obrigado! Volte sempre`);
}
let pilsen = 50
let ipa = 50
function calcPrecoChopp() {
    var preco = litros * 30;
    return (preco)
};
function bar() {
    alert("Seja bem vindo ao bar!\nHoje temos Chopp Ipa e Pilsen, \nNos tamanhos P de 300ml e M de 500ml. \nO P custando R$9 e o M R$15")
    do {
        var copo = prompt("Qual o copo que você quer?")
    } while ((copo != "P") && (copo != "p") && (copo != "M") && (copo != "m"))
    switch (copo) {
        case ("P" && "P"):
            litros = 0.3
            break;
        case ("M" && "m"):
            litros = 0.5
            break;
    }
    do {
        var chopp = prompt("Qual o tipo de chopp\nPilsen ou Ipa?")
    } while ((chopp != "Pilsen") && (chopp != "Ipa"))
    switch (chopp) {
        case "Pilsen":
            pilsen = pilsen - litros
            console.log(pilsen)
            break;
        case "Ipa":
            ipa = ipa - litros
            console.log(ipa)
            break;
    }
           if (pilsen >= litros || ipa >= litros) {
        alert("O total foi de  R$ " + calcPrecoChopp(litros));
    do {
        var dinheiro = prompt("Insira o dinheiro: ");
    } while(^[!/a-z]+$/.test(dinheiro)) 
        var troco = calcPrecoChopp(litros) - dinheiro;
        while (troco < 0) {
            var troco1 = troco * (-1)
            alert("Esse é o seu troco R$ " + troco1)
        }
        alert("Obrigado, já vamos abastecer seu copo!")
        demo()
    }
    else {
        alert("Infelizmente não temos mais Chopp estocado, volte novamente amanhã")
    }
}