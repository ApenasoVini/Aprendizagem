cumprimentar("Nieto")
converterAnosEmDias(17);
horasTrabalhadas(220)
acharMes(4)
numerosComparacao(1132, 432)
numeroInverso (40, -40)
numeroMultiplicacao (30, 10)

function cumprimentar(nome) {
    console.log("Olá " + nome + "!")
}

function converterAnosEmDias(anos) {
    dias = anos * 365;
    console.log("Você tem " + anos + " anos e está vivo(a) há " + dias + " dias");
}

function numeroMultiplicacao(num1, num2) {
    resultado = num1 * num2;
    console.log("O resultado é " + resultado);
}

function horasTrabalhadas(horas) {
    let salário = horas * 7;
    console.log("Você trabalha " + horas + " horas e recebe R$ " + salário);
}

function numeroInverso(valor1, valor2) {
    console.log("O inverso de " + valor1 + " é " + valor2);
}

function acharMes(numero) {
    switch (numero) {
        case 1:
            console.log("O número " + numero + " corresponde ao mês Janeiro");
            break;
        case 2:
            console.log("O número " + numero + " corresponde ao mês Fevereiro");
            break;
        case 3:
            console.log("O número " + numero + " corresponde ao mês Março");
            break;
        case 4:
            console.log("O número " + numero + " corresponde ao mês Abril");
            break;
        case 5:
            console.log("O número " + numero + " corresponde ao mês Maio");
            break;
        case 6:
            console.log("O número " + numero + " corresponde ao mês Junho");
            break;
        case 7:
            console.log("O número " + numero + " corresponde ao mês Julho");
            break;
        case 8:
            console.log("O número " + numero + " corresponde ao mês Agosto");
            break;
        case 9:
            console.log("O número " + numero + " corresponde ao mês Setembro");
            break;
        case 10:
            console.log("O número " + numero + " corresponde ao mês Outubro");
            break;
        case 11:
            console.log("O número " + numero + " corresponde ao mês Novembro");
            break;
        case 12:
            console.log("O número " + numero + " corresponde ao mês Dezembro");
            break;
    }
}
function numerosComparacao(num1, num2) {
    if (num1 != num2) {
        if (num1 > num2) {
            console.log(num1 + " é maior que " + num2);
        } else {
            console.log(num1 + " é menor que " + num2)
        }
    } else {
        console.log(num1 + "é igual a " + num2)
    }
}
