let valorA = 10
let valorB = 16
let valorC = 30
let valorD = 70
let valorAzul = 10
let valorBranca = 5
let valorPreta = 15
let valorVermelha = 12
let opcao
let cor
let estoque = [
    { codigo: 'A', cor: 'Azul', quantidade: 10 },
    { codigo: 'A', cor: 'Branca', quantidade: 5 },
    { codigo: 'A', cor: 'Preta', quantidade: 15 },
    { codigo: 'A', cor: 'Vermelha', quantidade: 12 },
    { codigo: 'B', cor: 'Azul', quantidade: 8 },
    { codigo: 'B', cor: 'Branca', quantidade: 3 },
    { codigo: 'B', cor: 'Preta', quantidade: 7 },
    { codigo: 'B', cor: 'Vermelha', quantidade: 10 },
    { codigo: 'C', cor: 'Azul', quantidade: 20 },
    { codigo: 'C', cor: 'Branca', quantidade: 10 },
    { codigo: 'C', cor: 'Preta', quantidade: 25 },
    { codigo: 'C', cor: 'Vermelha', quantidade: 18 },
    { codigo: 'D', cor: 'Azul', quantidade: 5 },
    { codigo: 'D', cor: 'Branca', quantidade: 2 },
    { codigo: 'D', cor: 'Preta', quantidade: 8 },
    { codigo: 'D', cor: 'Vermelha', quantidade: 6 }
];
let codigoVendido = opcao;
let corVendida = cor;

for (let i = 0; i < estoque.length; i++) {
    let item = estoque[i];
    if (item.codigo === codigoVendido && item.cor === corVendida) {
        item.quantidade--;
        break;
    }
}
opcao = prompt("Qual camisa você deseja? A, B, C ou D?")
switch (opcao) {

    case 'A':
        cor = prompt("Qual cor você deseja? Azul, branca, preta ou vermelha?")
        switch (cor) {
            case 'Azul':
                precoCamisa = valorA + valorAzul;
                console.log("Sua camisa A da cor azul custou " + precoCamisa + " reais");
                break;
            case 'Branca':
                precoCamisa = valorA + valorBranca;
                console.log("Sua camisa A da cor branca custou " + precoCamisa + " reais");
                break;
            case 'Preta':
                precoCamisa = valorA + valorPreta;
                console.log("Sua camisa A da cor preta custou " + precoCamisa + " reais");
                break;
            case 'Vermelha':
                precoCamisa = valorA + valorVermelha;
                console.log("Sua camisa A da cor vermelha custou " + precoCamisa + " reais");
                break;
            default:
                console.log("Erro! Por favor selecione uma cor válida");
                break;
        }
        break;
    case 'B':
        cor = prompt("Qual cor você deseja? Azul, branca, preta ou vermelha?")
        switch (cor) {
            case 'Azul':
                precoCamisa = valorB + valorAzul;
                console.log("Sua camisa B da cor azul custou " + precoCamisa + " reais");
                break;
            case 'Branca':
                precoCamisa = valorB + valorBranca;
                console.log("Sua camisa B da cor branca custou " + precoCamisa + " reais");
                break;
            case 'Preta':
                precoCamisa = valorB + valorPreta;
                console.log("Sua camisa B da cor preta custou " + precoCamisa + " reais");
                break;
            case 'Vermelha':
                precoCamisa = valorB + valorVermelha;
                console.log("Sua camisa B da cor vermelha custou " + precoCamisa + " reais");
                break;
            default:
                console.log("Erro! Por favor selecione uma cor válida");
                break;
        }
        break;
    case 'C':
        cor = prompt("Qual cor você deseja? Azul, branca, preta ou vermelha?")
        switch (cor) {
            case 'Azul':
                precoCamisa = valorC + valorAzul;
                console.log("Sua camisa C da cor azul custou " + precoCamisa + " reais");
                break;
            case 'Branca':
                precoCamisa = valorC + valorBranca;
                console.log("Sua camisa C da cor branca custou " + precoCamisa + " reais");
                break;
            case 'Preta':
                precoCamisa = valorC + valorPreta;
                console.log("Sua camisa C da cor preta custou " + precoCamisa + " reais");
                break;
            case 'Vermelha':
                precoCamisa = valorC + valorVermelha;
                console.log("Sua camisa C da cor vermelha custou " + precoCamisa + " reais");
                break;
            default:
                console.log("Erro! Por favor selecione uma cor válida");
                break;
        }
        break;
    case 'D':
        cor = prompt("Qual cor você deseja? Azul, branca, preta ou vermelha?")
        switch (cor) {
            case 'Azul':
                precoCamisa = valorD + valorAzul;
                console.log("Sua camisa D da cor azul custou " + precoCamisa + " reais");
                break;
            case 'Branca':
                precoCamisa = valorD + valorBranca;
                console.log("Sua camisa D da cor branca custou " + precoCamisa + " reais");
                break;
            case 'Preta':
                precoCamisa = valorD + valorPreta;
                console.log("Sua camisa D da cor preta custou " + precoCamisa + " reais");
                break;
            case 'Vermelha':
                precoCamisa = valorD + valorVermelha;
                console.log("Sua camisa D da cor vermelha custou " + preco + " reais");
                break;
            default:
                console.log("Erro! Por favor selecione uma cor válida");
                break;
        }
        break;
}