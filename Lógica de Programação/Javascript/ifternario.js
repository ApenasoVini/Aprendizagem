function parimpar() {

  do {
    var num = prompt("Digite um número");
  } while (isNaN(num) || num === '');

  return num % 2 === 0 ? alert(`Par`) : alert(`Ímpar`);
}

parimpar();