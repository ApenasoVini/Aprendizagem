let namePokemon;

function dados() {
    namePokemon = document.getElementById('n');
}

function poke() {
    dados();

    if (namePokemon) {
        var url = `https://pokeapi.co/api/v2/pokemon/${namePokemon.value}`
        fetch(url)
            .then(res => res.json())
            .then(data => {

                document.getElementById('info').style.display = 'grid';
                const infoPokemon = document.getElementById('info');
                infoPokemon.innerHTML = `
               
                    <span id='nome'>${data.nome}</span>
                `;
            });
    }
    else {
        alert('Nome inválido!');
    }
}
