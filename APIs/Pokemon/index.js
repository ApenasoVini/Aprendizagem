let nomePokemon;

function dados() {
    nomePokemon = document.getElementById('n');
}

function poke() {
    dados();

    if (nomePokemon) {
        var url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon.value}`
        fetch(url)
            .then(res => res.json())
            .then(data => {

                document.getElementById('info').style.display = 'grid';
                const infoPokemon = document.getElementById('info');
                infoPokemon.innerHTML = `
               
                    <span id='name'>${data.name}</span>
                `;
            });
    }
    else {
        alert('Nome inválido!');
    }
}