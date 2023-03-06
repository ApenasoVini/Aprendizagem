programa
{
	funcao inicio()
	{
		inteiro area, comprimento, lado, perimetro
		cadeia opcao	
		escreva("Escolha 1 para calcular a área, escolha 2 para calcular o perímetro")
		leia(opcao)
			se(opcao == "1"){
				escreva("Qual o tamanho do lado de seu pentágono?; \n")
				leia(lado)
				escreva("Qual o comprimento do centro até a base?; \n")
				leia(comprimento)
				area=5*lado*comprimento
				escreva("A área do seu pentágono é "+area)
					}
			se(opcao == "2"){
				escreva("Qual o tamanho do lado de seu pentágono?; \n")
				leia(lado)
				perimetro=5*lado
				escreva("O perímetro do seu pentágono é "+perimetro)
			
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 632; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */