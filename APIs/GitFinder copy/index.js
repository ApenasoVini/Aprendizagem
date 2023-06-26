let name, info;

function poke() {
    info = document.getElementById('info');
    name = document.getElementById('name');

    if (name) {
        var url = `https://pokeapi.co/api/v2/pokemon/${name.value}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                info.innerHTML = `
                    <p>${data.name}</p>
                `
            })
    }
    else if (!name) {
        alert("Nome inválido!")
    }
}
