programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real area, base, altura, raio
		cadeia poligono

			escreva("Qual polígono você quer calcular a área de? \n")
			leia(poligono)

				se(poligono == "quadrado"){
					escreva("Tamanho da base? \n")
					leia(base)
					area=mat.potencia(base, 2)
					escreva("A área é "+area)
				}

				senao se(poligono =="retângulo"){
					escreva("Tamanho do base? \n")
					leia(base)
					escreva("Altura? \n")
					leia(altura)
					area=base*altura  
					escreva("A área é "+area)
				}

				senao se(poligono =="círculo"){
					escreva("Comprimento do raio? \n")
					leia(raio)
					area=mat.PI*mat.potencia(raio, 2.0)
					escreva("A área é "+area)
				}

				senao se(poligono =="triangulo"){
					escreva("Tamanho do base? \n")
					leia(base)
					escreva("Altura? \n")
					leia(altura)
					area=(base*altura)/2
					escreva("A área é "+area)
				}

				senao{
					escreva("Por favor, escreva corretamente!")
				}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 991; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */