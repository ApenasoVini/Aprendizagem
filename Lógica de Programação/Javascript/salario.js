function horasTrabalhadas(horasMes, horasPagamento){
    horasMes = prompt(`Quantas horas por mês você trabalha?`)
    horasPagamento = prompt(`Quanto você ganha por hora?`)
    var salario = horasMes * horasPagamento 
    console.log(`Seu salário é R$ ${salario}`)
}

horasTrabalhadas()