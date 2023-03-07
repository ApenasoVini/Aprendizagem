let estoqueCamisas = 68
let estoqueCalcas = 45
var opcao
var tipoCamisa
var tipoCalca
var quantidade

do{
opcao = prompt("Olá, o que você deseja olhar?\n\nCamisetas\nCalças\nSair")
switch(opcao){
    case "Camisetas":
        alert("Ok, temos:\n\nCamiseta Listrada\nCamiseta com Estampa")
        tipoCamiseta = prompt("Qual tipo você deseja comprar?")
        if(tipoCamiseta == "Camiseta Listrada" || tipoCamiseta == "camiseta listrada" || tipoCamiseta == "listrada" || tipoCamiseta == "Listrada" || tipoCamiseta == "Estampa" || tipoCamiseta == "estampa" || tipoCamiseta == "Camiseta com Estampa" || tipoCamiseta == "camiseta com estampa"){
            quantidade = prompt("Qual a quantidade?")
            if(quantidade < 1 || quantidade > estoqueCamisas){
                alert("Por favor, digite um valor válido!")
                break;
            }
            prompt("Ok, digite a senha do cartão.")
            alert("Compra finalizada")
            estoqueCamisas = estoqueCamisas - quantidade
            alert(`Estoque de camisetas: ${estoqueCamisas}`)
            break;
        }
        else{
            alert("Por favor, digite uma opção válida")
            break;
        }
    
    case "Calças":
        alert("Ok, temos:\n\nCalça Jeans\nCalça Moletom")
        tipoCalca = prompt("Qual tipo você deseja comprar?")
        if(tipoCalca == "Calça Jeans" || tipoCalca == "calça jeans" || tipoCalca == "jeans" || tipoCalca == "Jeans" || tipoCalca == "Calça Moletom" || tipoCalca == "calça moletom" || tipoCalca == "Moletom" || tipoCalca == "moletom" || tipoCalca == "Calca Moletom" || tipoCalca == "calca moletom"){
            quantidade = prompt("Qual a quantidade?")
            if(quantidade < 1 || quantidade > estoqueCalcas){
                alert("Por favor, digite um valor válido!")
                break;
            }
            prompt("Ok, digite a senha do cartão.")
            alert("Compra finalizada")
            estoqueCalcas = estoqueCalcas - quantidade
            alert(`Estoque de calças: ${estoqueCalcas}`)
            break;
        
        }
        else{
            alert("Por favor, digite uma opção válida")
            break;
        }
}
if(estoqueCamisas + estoqueCalcas == 0){
    alert("O estoque está esgotado")
}
if(opcao == "Sair"){
    alert("Obrigado por vir!")
}
}while(opcao != "Sair")