let hora1 = parseInt(prompt('Digite a primeira hora '));
let hora2 = parseInt(prompt('Digite a segunda hora'));
let minuto1 = parseInt(prompt('Digite o primeiro minuto'));
let minuto2 = parseInt(prompt('Digite o segundo minuto'));

let operacao = prompt('Digite "soma" para adicionar os horários ou "subtracao" para subtrair os horários:');

let resultadoHora;
let resultadoMinuto;

if (operacao === 'soma') {
  resultadoHora = hora1 + hora2;
  resultadoMinuto = minuto1 + minuto2;

  if (resultadoMinuto >= 60) {
    resultadoMinuto -= 60;
    resultadoHora++;
  }
} else if (operacao === 'subtracao') {
  resultadoHora = hora1 - hora2;
  resultadoMinuto = minuto1 - minuto2;

  while (resultadoMinuto < 0) {
    resultadoMinuto += 60;
    resultadoHora--;
  }

  if (resultadoHora < 0) {
    alert('Resultado inválido');
  }
} 

alert(`O resultado é: ${resultadoHora}:${resultadoMinuto}`);
