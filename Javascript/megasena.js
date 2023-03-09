function numerosEscolhidos(num1, num2,  num3, num4, num5, num6){
num1 = prompt(`Escolha o primeiro número no formato xx e x`)
num2 = prompt(`Escolha o segundo número no formato xx e x`)
num3 = prompt(`Escolha o terceiro número no formato xx e x`)
num4 = prompt(`Escolha o quarto número no formato xx e x`)
num5 = prompt(`Escolha o quinto número no formato xx e x`)
num6 = prompt(`Escolha o sexto número no formato xx e x`)

console.log(`Seus números são: `+ num1 + "," + num2 + "," + num3 + "," + num4 + "," + num5 + ","+ num6)

}
numerosEscolhidos()

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function sortearMegaSena() {
    var numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      var numero = gerarNumeroAleatorio(1, 60);
      if (numerosSorteados.indexOf(numero) == -1) {
        numerosSorteados.push(numero);
      }
    }
    console.log(`Os números são: `+ numerosSorteados)

  } 
  var jogo = sortearMegaSena();
console.log(jogo);