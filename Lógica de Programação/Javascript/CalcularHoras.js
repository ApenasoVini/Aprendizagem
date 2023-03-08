// Pede dois horários 
let time1 = prompt('Digite o primeiro horário no formato hh:mm:ss:');
let time2 = prompt('Digite o segundo horário no formato hh:mm:ss:');

// Pede a operação 
let operation = prompt('Digite "soma" para adicionar os horários ou "subtracao" para subtrair os horários:');

// Calcula
let result;
if (operation === 'soma') {
  result = addHours(time1, time2);
} else if (operation === 'subtracao') {
  result = subtractHours(time1, time2);
} else {
  result = 'Operação inválida';
}

// Mostra o resultado 
alert(`O resultado é: ${result}`);

// Função para adicionar horas
function addHours(time1, time2) {
  let [h1, m1, s1] = time1.split(':').map(Number);
  let [h2, m2, s2] = time2.split(':').map(Number);
  
  let seconds = s1 + s2;
  let carry = Math.floor(seconds / 60);
  seconds %= 60;
  
  let minutes = m1 + m2 + carry;
  carry = Math.floor(minutes / 60);
  minutes %= 60;
  
  let hours = h1 + h2 + carry;
  hours %= 24;
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Função para subtrair horas
function subtractHours(time1, time2) {
  let [h1, m1, s1] = time1.split(':').map(Number);
  let [h2, m2, s2] = time2.split(':').map(Number);
  
  let seconds = s1 - s2;
  let carry = 0;
  if (seconds < 0) {
    carry = 1;
    seconds += 60;
  }
  
  let minutes = m1 - m2 - carry;
  carry = 0;
  if (minutes < 0) {
    carry = 1;
    minutes += 60;
  }
  
  let hours = h1 - h2 - carry;
  if (hours < 0) {
    hours += 24;
  }
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
