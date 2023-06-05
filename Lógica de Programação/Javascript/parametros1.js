var array = []
let item = prompt("Escolha algo para repetir:\n");
let vezes = prompt("Escolha o número de repetições:\n");

function repeticoes() {
    for (let i = 0; i < vezes; i++) {
        array.push(item);
    }
    console.log(array);
}

repeticoes();

