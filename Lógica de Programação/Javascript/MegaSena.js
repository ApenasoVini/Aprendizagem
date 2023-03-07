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
    return numerosSorteados;
  } 
  var jogo = sortearMegaSena();
console.log(jogo);