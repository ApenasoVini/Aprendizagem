function obterDadosClima() {

let name = document.getElementById(dados)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperatura = data.main.temp;
      const umidade = data.main.humidity;
      const vento = data.wind.speed;
      const chuva = (data.rain && data.rain['1h']) || 'N/A';

      console.log(`Temperatura: ${temperatura}°C`);
      console.log(`Umidade: ${umidade}%`);
      console.log(`Velocidade do Vento: ${vento} m/s`);
      console.log(`Previsão de Chuva: ${chuva}`);
    })
    .catch(error => {
      console.log('Erro ao obter dados:', error);
    });
}

obterDadosClima();