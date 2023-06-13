let display = document.getElementById('display');

function addToDisplay(value) {
  display.value += value;
}

function limpar() {
  display.value = '';
}

function limpar1() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function resultado() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (e) {
    console.log('Erro ao calcular: ' + e);
  }
}
