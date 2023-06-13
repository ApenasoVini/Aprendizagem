    let placa, modelo, marca, ano
    function campos() {
        placa = document.getElementById("placa");
        if (placa.length == 8) {
            return true
        }
        return false
    }
    function buscaCarro() {
        campos()
        var url = `https://my-json-server.typicode.com/ApenasoVini/Curso/Carros/db/placas/?placa=${placa.value.toUpperCase()}`
        fetch(url)
            .then(res => res.json())
            .then(data => {

                marca = data[0].marca
                modelo = data[0].modelo
                ano = data[0].ano

                alert(`Placa: ${placa} \nMarca: ${marca} \nModelo: ${modelo} \nAno: ${ano}`)
            })
    }
