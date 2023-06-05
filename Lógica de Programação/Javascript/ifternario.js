function numeros(input) {
        return /^\d+$/.test(input);
      }

function parimpar(){
    
    do {
    var num = prompt("Digite um número")
    } while (!numeros(num))

    return num % 2 == 0 ? alert(`Par`) : alert(`Impar`) 
}

parimpar()
numeros(input)