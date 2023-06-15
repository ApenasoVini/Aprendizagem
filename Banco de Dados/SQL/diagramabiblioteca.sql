CREATE TABLE usuario(
    cpf VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    funcao VARCHAR(50),
    cadastro VARCHAR(50) NOT NULL,
);

CREATE TABLE livros(
    isbn VARCHAR(13) PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    autor VARCHAR(50) NOT NULL,
    editora VARCHAR(50),
    ano_publicacao INT,
    quantidade_disponivel INT NOT NULL
);

CREATE TABLE biblioteca(
    cnpj INT PRIMARY KEY,
    horario TIME NOT NULL,
    funcionarios VARCHAR(100),
    isbn VARCHAR(13) NOT NULL,
    FOREIGN KEY (isbn) REFERENCES livros (isbn),
);

CREATE TABLE multa(
    id SERIAL PRIMARY KEY,
    valor INT NOT NULL,
    pagamento BOOLEAN NOT NULL,
    data_pagamento DATE NOT NULL,
    isbn VARCHAR(13) NOT NULL,
    FOREIGN KEY (isbn) REFERENCES livros (isbn)
);

CREATE TABLE devolucoes(
    isbn VARCHAR(13) PRIMARY KEY,
    data_devolucao DATE NOT NULL,
    multa BOOLEAN NOT NULL,
    FOREIGN KEY (isbn) REFERENCES livros (isbn)
);

CREATE TABLE historico(
    periodo VARCHAR(20) PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL,
    isbn VARCHAR(13) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES usuario (cpf),
    FOREIGN KEY (isbn) REFERENCES livros (isbn)
);

CREATE TABLE reservas(
    codigo_reserva VARCHAR(50) PRIMARY KEY,
    isbn VARCHAR(13) NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES usuario (cpf),
    FOREIGN KEY (isbn) REFERENCES livros (isbn)
);