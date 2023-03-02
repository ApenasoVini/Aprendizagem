console.log(parametros(60, 50, 100)) //true
console.log(parametros(16, 100, 160)) //false
console.log(parametros(3, 3, 190)) //false
console.log(parametros(3, 3, 150, true)) //true
function parametros(numero, minimo, maximo, inclusivo = false) {

    if (inclusivo == true) {
        if (numero >= minimo && numero <= maximo) {
            return true
        } else {
            return false
        }
    } else if (inclusivo == false) {
        if (numero > minimo && numero < maximo) {
            return true
        } else {
            return false
        }
    }
}