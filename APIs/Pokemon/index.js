let nomePokemon;

function dados() {
    nomePokemon = document.getElementById('pokemonName').value;
}

function poke() {
    dados();

    if (nomePokemon) {
        var url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                document.getElementById('info').style.display = 'grid';
                const infoPokemon = document.getElementById('info');
                infoPokemon.innerHTML = `
                    <span id='name'>${data.name}</span>
                    <span id='types'>${data.types[0].type.name}</span>
                    <span id='id'>${data.id}</span>
                    <img src='${data.sprites.back_default}' class='back_default'>
                    <img src='${data.sprites.front_default}' class='front_default'>
                `;
            });
    } else {
        alert('Nome inválido!');
    }
}