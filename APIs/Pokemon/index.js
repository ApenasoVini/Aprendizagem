let nomePokemon;

function dados() {
    nomePokemon = document.getElementById('pokemonName');
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
                    <span id='types'>${data.types}</span>
                    <span id='id'>${data.id}</span>
                    <img class='back_default'>${data.back_default}</span>
                    <img class='front_default'>${data.front_default}</span>
                `;
            });
    }
    else {
        alert('Nome inválido!');
    }
}