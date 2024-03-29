CREATE TABLE clientes(
    cpf VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    telefone VARCHAR(50),
    id_produto VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES produto (id_produto)
);

CREATE TABLE empresa(
    cnpj VARCHAR(13) PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    patrimonio INT NOT NULL,
    data_criacao DATE NOT NULL,
    id_produto VARCHAR(10) NOT NULL,
    codigo VARCHAR(10) NOT NULL,
    id_funcionarios VARCHAR(10) NOT NULL,
    FOREIGN KEY (codigo) REFERENCES setores (codigo),
    FOREIGN KEY (id_funcionarios) REFERENCES funcionarios (id_funcionarios),
    FOREIGN KEY (id_produto) REFERENCES produto (id_produto)
);

CREATE TABLE setores(
    codigo VARCHAR(10) PRIMARY KEY,
    funcao VARCHAR(30) NOT NULL,
    gastos INT NOT NULL,
    lucro INT NOT NULL
);

CREATE TABLE produto(
    id_produto VARCHAR(10) PRIMARY KEY,
    valor INT NOT NULL,
    nome VARCHAR(40) NOT NULL
);

CREATE TABLE funcionarios(
    id_funcionarios VARCHAR(10) PRIMARY KEY,
    salario INT NOT NULL,
    horario VARCHAR(12) NOT NULL
);

INSERT INTO clientes (cpf, nome, telefone, id_produto) VALUES
  ('12345678901', 'João', '1234567890', 'P1'),
  ('23456789012', 'Marcos', '2345678901', 'P2'),
  ('34567890123', 'Júlia', '3456789012', 'P3'),
  ('45678901234', 'Ângelo', '4567890123', 'P4'),
  ('56789012345', 'Tiago', '5678901234', 'P5'),
  ('67890123456', 'Isac', '6789012345', 'P6'),
  ('78901234567', 'Júlia', '7890123456', 'P7'),
  ('89012345678', 'Isac', '8901234567', 'P8'),
  ('90123456789', 'Ana', '9012345678', 'P9'),
  ('01234567890', 'Ana', '0123456789', 'P10'),
  ('13345098765', 'Miguel', '1234509876', 'P11'),
  ('24456109876', 'Miguel', '2345610987', 'P12'),
  ('36567210987', 'Isac', '3456721098', 'P13'),
  ('45678321098', 'Isac', '4567832109', 'P14'),
  ('66789432109', 'Miguel', '5678943210', 'P15'),
  ('27890543210', 'Ângelo', '6789054321', 'P16'),
  ('38901654321', 'Miguel', '7890165432', 'P17'),
  ('49012765432', 'Matias', '8901276543', 'P18'),
  ('50123876543', 'Matias', '9012387654', 'P19'),
  ('61234987654', 'Ângelo', '0123498765', 'P20'),
  ('92345098765', 'Ana', '1234509876', 'P1'),
  ('93456109876', 'João', '2345610987', 'P2'),
  ('94567210987', 'João', '3456721098', 'P3'),
  ('95678321098', 'Ana', '4567832109', 'P4'),
  ('60789432109', 'Matias', '5678943210', 'P5'),
  ('96789053210', 'Ana', '6789054321', 'P6'),
  ('79901654321', 'Ana', '7890165432', 'P7'),
  ('87012765432', 'João', '8901276543', 'P8'),
  ('96123876543', 'João', '9012387654', 'P9'),
  ('05234987654', 'Matias', '0123498765', 'P10');

INSERT INTO empresa (cnpj, nome, patrimonio, data_criacao, id_produto, codigo, id_funcionarios) VALUES
  ('1234567890123', 'Empresa 1', 1000000, '2020-01-01', 'P1', 'C1', 'F1'),
  ('2345678901234', 'Empresa 2', 2000000, '2020-02-02', 'P2', 'C2', 'F2'),
  ('3456789012345', 'Empresa 3', 3000000, '2020-03-03', 'P3', 'C3', 'F3'),
  ('4567890123456', 'Empresa 4', 4000000, '2020-04-04', 'P4', 'C4', 'F4'),
  ('5678901234567', 'Empresa 5', 5000000, '2020-05-05', 'P5', 'C5', 'F5'),
  ('6789012345678', 'Empresa 6', 6000000, '2020-06-06', 'P6', 'C6', 'F6'),
  ('7890123456789', 'Empresa 7', 7000000, '2020-07-07', 'P7', 'C7', 'F7'),
  ('8901234567890', 'Empresa 8', 8000000, '2020-08-08', 'P8', 'C8', 'F8'),
  ('9012345678901', 'Empresa 9', 9000000, '2020-09-09', 'P9', 'C9', 'F9'),
  ('0123456789012', 'Empresa 10', 10000000, '2020-10-10', 'P10', 'C10', 'F10'),
  ('1234437890123', 'Empresa 11', 1000000, '2020-01-01', 'P1', 'C1', 'F1'),
  ('2345328901234', 'Empresa 12', 2000000, '2020-02-02', 'P2', 'C2', 'F2'),
  ('3456743901234', 'Empresa 13', 3000000, '2020-03-03', 'P3', 'C3', 'F3'),
  ('4567893412346', 'Empresa 14', 4000000, '2020-04-04', 'P4', 'C4', 'F4'),
  ('5678901433467', 'Empresa 15', 5000000, '2020-05-05', 'P5', 'C5', 'F5'),
  ('6789012333248', 'Empresa 16', 6000000, '2020-06-06', 'P6', 'C6', 'F6'),
  ('7890123459789', 'Empresa 17', 7000000, '2020-07-07', 'P7', 'C7', 'F7'),
  ('8901234569890', 'Empresa 18', 8000000, '2020-08-08', 'P8', 'C8', 'F8'),
  ('9012345677901', 'Empresa 19', 9000000, '2020-09-09', 'P9', 'C9', 'F9'),
  ('0123456787012', 'Empresa 20', 10000000, '2020-10-10', 'P10', 'C10', 'F10'),
  ('1234567897123', 'Empresa 21', 1000000, '2020-01-01', 'P1', 'C1', 'F1'),
  ('2345678907234', 'Empresa 22', 2000000, '2020-02-02', 'P2', 'C2', 'F2'),
  ('3456789017345', 'Empresa 23', 3000000, '2020-03-03', 'P3', 'C3', 'F3'),
  ('4567890127456', 'Empresa 24', 4000000, '2020-04-04', 'P4', 'C4', 'F4'),
  ('5678901237567', 'Empresa 25', 5000000, '2020-05-05', 'P5', 'C5', 'F5'),
  ('6789012347678', 'Empresa 26', 6000000, '2020-06-06', 'P6', 'C6', 'F6'),
  ('7890123457789', 'Empresa 27', 7000000, '2020-07-07', 'P7', 'C7', 'F7'),
  ('8941234567890', 'Empresa 28', 8000000, '2020-08-08', 'P8', 'C8', 'F8'),
  ('9013345677901', 'Empresa 29', 9000000, '2020-09-09', 'P9', 'C9', 'F9'),
  ('0113456787012', 'Empresa 30', 10000000, '2020-10-10', 'P10', 'C10', 'F10');

INSERT INTO setores (codigo, funcao, gastos, lucro) VALUES
  ('C1', 'ADM', 100000, 50000),
  ('C2', 'FIN', 200000, 10000),
  ('C3', 'RH', 30000, 15000),
  ('C4', 'VEN', 400000, 20000),
  ('C5', 'OPE', 50000, 250000),
  ('C6', 'MARK', 60000, 30000),
  ('C7', 'ADM', 70000, 350000),
  ('C8', 'VEN', 800000, 400000),
  ('C9', 'RH', 900000, 450000),
  ('C10', 'ADM', 1000000, 12000),
  ('C11', 'ADM', 100000, 50000),
  ('C12', 'FIN', 200000, 10000),
  ('C13', 'RH', 300000, 150000),
  ('C14', 'VEN', 400000, 200000),
  ('C15', 'OPE', 500000, 250000),
  ('C16', 'MARK', 600000, 30000),
  ('C17', 'ADM', 700000, 350000),
  ('C18', 'VEN', 800000, 40000),
  ('C19', 'RH', 900000, 450000),
  ('C20', 'ADM', 1000000, 500000),
  ('C21', 'ADM', 100000, 50000),
  ('C22', 'FIN', 200000, 100000),
  ('C23', 'RH', 300000, 150000),
  ('C24', 'VEN', 400000, 200000),
  ('C25', 'OPE', 500000, 250000),
  ('C26', 'MARK', 600000, 300000),
  ('C27', 'ADM', 700000, 350000),
  ('C28', 'VEN', 800000, 400000),
  ('C29', 'RH', 900000, 450000),
  ('C30', 'ADM', 1000000, 500000);

INSERT INTO funcionarios (id_funcionarios, salario, horario) VALUES
  ('F1', 2000, '09:00-18:00'),
  ('F2', 2000, '09:00-18:00'),
  ('F3', 2000, '09:00-18:00'),
  ('F4', 2000, '09:00-18:00'),
  ('F5', 2000, '09:00-18:00'),
  ('F6', 20000, '09:00-18:00'),
  ('F7', 2000, '09:00-18:00'),
  ('F8', 2000, '09:00-18:00'),
  ('F9', 2000, '09:00-18:00'),
  ('F10', 4000, '09:00-18:00'),
  ('F11', 4000, '09:00-18:00'),
  ('F12', 4000, '09:00-18:00'),
  ('F13', 4000, '09:00-18:00'),
  ('F14', 4000, '09:00-18:00'),
  ('F15', 4000, '09:00-18:00'),
  ('F16', 4000, '09:00-18:00'),
  ('F17', 4000, '09:00-18:00'),
  ('F18', 1100, '09:00-18:00'),
  ('F19', 1100, '09:00-18:00'),
  ('F20', 1100, '09:00-18:00'),
  ('F21', 1100, '09:00-18:00'),
  ('F22', 1100, '09:00-18:00'),
  ('F23', 1100, '09:00-18:00'),
  ('F24', 1100, '09:00-18:00'),
  ('F25', 1100, '09:00-18:00'),
  ('F26', 1100, '09:00-18:00'),
  ('F27', 1100, '09:00-18:00'),
  ('F28', 1100, '09:00-18:00'),
  ('F29', 1100, '09:00-18:00'),
  ('F30', 100, '09:00-18:00');

INSERT INTO produto (id_produto, valor, nome) VALUES
  ('P1', 10, 'Garrafa'),
  ('P2', 8, 'Pote'),
  ('P3', 15, 'Xícara'),
  ('P4', 100, 'Liquidificador'),
  ('P5', 500, 'Tapete'),
  ('P6', 15, 'Xícara'),
  ('P7', 10, 'Garrafa'),
  ('P8', 120, 'Tapete'),
  ('P9', 15, 'Xícara'),
  ('P10', 120, 'Tapete'),
  ('P11', 100, 'Liquidificador'),
  ('P12', 120, 'Tapete'),
  ('P13', 15, 'Xícara'),
  ('P14', 120, 'Tapete'),
  ('P15', 120, 'Tapete'),
  ('P16', 10, 'Garrafa'),
  ('P17', 15, 'Xícara'),
  ('P18', 10, 'Garrafa'),
  ('P19', 15, 'Xícara'),
  ('P20', 100, 'Liquidificador'),
  ('P21', 8, 'Pote'),
  ('P22', 8, 'Pote'),
  ('P23', 8, 'Pote'),
  ('P24', 8, 'Pote'),
  ('P25', 8, 'Pote'),
  ('P26', 10, 'Garrafa'),
  ('P27', 15, 'Xícara'),
  ('P28', 15, 'Xícara'),
  ('P29', 10, 'Garrafa'),
  ('P30', 10, 'Garrafa');

SELECT * FROM clientes;
SELECT * FROM empresa;
SELECT * FROM setores;
SELECT * FROM produto;
SELECT * FROM funcionarios;
