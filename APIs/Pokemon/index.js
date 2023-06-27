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
                    <span id='type'>${data.types.name}</span>
                    <span id='id'>${data.id}</span>
                    <span class='sprites'>${data.back_default}</span>
                    <span class='sprites'>${data.front_default}</span>
                `;
            });
    }
    else {
        alert('Nome inválido!');
    }
}