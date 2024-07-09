class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  }
  fazerAniversario() {
    this.idade += 1;
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }
  apresentar() {
    return `Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e estudo ${this.curso}.`;
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, disciplina) {
    super(nome, idade);
    this.disciplina = disciplina;
  }
  apresentar() {
    return `Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e ensino ${this.disciplina}.`;
  }
}

const estudante1 = new Estudante('Ana', 20, 'Matemática');
const professor1 = new Professor('Carlos', 45, 'Física');

console.log(estudante1.apresentar());
console.log(professor1.apresentar());

estudante1.fazerAniversario();
console.log(estudante1.apresentar());
