let display = document.getElementById('display');

  function addToDisplay(value) {
    display.value += value;
  }

  function limpar(value) {
    display.value = '';
  }
  function resultado() {
    try {
      let result = eval(display.value);
      display.value = result;
    } catch (e) {
      console.log('Erro ao calcular: ' + e);
    }
  }
