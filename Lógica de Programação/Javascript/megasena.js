function numerosEscolhidos() {
  var num1 = prompt("Escolha o primeiro número no formato xx e x");
  var num2 = prompt("Escolha o segundo número no formato xx e x");
  var num3 = prompt("Escolha o terceiro número no formato xx e x");
  var num4 = prompt("Escolha o quarto número no formato xx e x");
  var num5 = prompt("Escolha o quinto número no formato xx e x");
  var num6 = prompt("Escolha o sexto número no formato xx e x");
  alert("Seus números são: " + num1 + "," + num2 + "," + num3 + "," + num4 + "," + num5 + "," + num6);

}

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
  console.log("Os números são: " + numerosSorteados);
  return numerosSorteados;
}

sortearMegaSena()
numerosEscolhidos()