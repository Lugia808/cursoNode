-- Como criar tabelas
--select * from usuarios where nome = 'Naell%'; para achar nomes que começam com Naell

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

Insert into usuarios(nome, email, idade) values(
    ' Clodoaldo', 'Clodoaldo@teste.com', 5
);

insert into usuarios(nome, email, idade) values
    ('Natan Silva', 'natan@email.com', 24),
    ('Maria Silva', 'maria@email.com', 56),
    ('José Irmão', 'jose@email.com', 56);
