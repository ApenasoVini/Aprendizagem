let name;
    
function poke() {
        name = document.getElementById('name');


        if(name){
        var url = `https://pokeapi.co/api/v2/pokemon/${name.value}`
        fetch(url)

            .then(res => res.json())
            .then(data => {

                info.innerHTML =
                    `
            <p${name.value}>
            
            `

            })}
            else if(nome){
                alert("Nome inválido!")
            }
    }
