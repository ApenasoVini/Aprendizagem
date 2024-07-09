const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
numeros.pop();

numeros.forEach(numero => {
  console.log(numero);
});

const maioresQueTres = numeros.filter(numero => numero > 3);
console.log(maioresQueTres);

const dobrados = numeros.map(numero => numero * 2);
console.log(dobrados);

const soma = numeros.reduce((acc, numero) => acc + numero, 0);
console.log(soma);
