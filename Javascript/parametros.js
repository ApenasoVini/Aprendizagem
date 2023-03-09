let item = prompt("Escolha algo para repetir:\n")
let vezes = prompt("Escolha o número de repetições:\n")

var array = []

function repetcoes(item, vezes) {
    for (let i = 0; i < vezes; i++) {
        array.push(item)
    }
    console.log(array)
}
repeticoes(item, vezes)

