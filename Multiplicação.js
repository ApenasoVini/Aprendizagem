multiplicar(5, 5);
multiplicar(0, 7);

function multiplicar(multiplicador1, multiplicador2){
    var numero = 0;
    var soma = 0;

    while(numero < multiplicador1){
        soma = soma + multiplicador2;
        numero++
    }
    console.log(soma)
}