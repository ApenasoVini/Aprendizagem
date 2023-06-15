programa
{
	
	funcao inicio()
	{
		inteiro num1, num2, operacao, resultado
		cadeia opcao

		escreva("Escreva o primeiro número\n")
		leia(num1)
		escreva("Escreva o segundo número\n")
		leia(num2)
		escreva("Qual tipo de conta? \n \n 1-Adição \n 2-Subtração \n 3-Multiplicação \n 4-Divisão \n")
		leia(opcao)

			se(opcao == "1"){
				resultado=num1+num2
				escreva("O resultado é "+resultado)
			}

			se(opcao == "2"){
				resultado=num1-num2
				escreva("O resultado é "+resultado)
			}

			se(opcao == "3"){
				resultado=num1*num2
				escreva("O resultado é "+resultado)
			}

			se(opcao =="4"){
				resultado=num1/num2
				escreva("O resultado é "+resultado)
			}	
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 681; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */