function jogo() {
  var numerosEscolhidos = Array.from({ length: 6 }, () => parseInt(prompt("Escolha um número de 1 a 60, no formato xx ou x")));
  var numerosSorteados = Array.from({ length: 6 }, () => Math.floor(Math.random() * 60) + 1);
  var ganhou = numerosEscolhidos.every(num => numerosSorteados.includes(num));
  ganhou ? console.log("Você ganhou!") : console.log("Você perdeu!");
  console.log(`Números escolhidos: ${numerosEscolhidos} | Números sorteados: ${numerosSorteados}`);
}
jogo();