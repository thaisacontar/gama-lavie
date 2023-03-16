create database lavie;
use lavie;

-- TABELA PSICÓLOGOS

create table psicologos(
	id int not null auto_increment primary key unique,
    nome varchar(100) not null,
    email varchar(60) not null unique,
    senha varchar(10) not null,
    apresentacao text not null
);

-- TABELA PACIENTES

create table pacientes(
	id int not null auto_increment primary key unique,
    nome varchar(100) not null,
    email varchar(60) not null unique,
	idade date not null
);

-- TABELA ATENDIMENTOS 

create table atendimentos(
	id int not null auto_increment primary key unique,
    data_atendimento date not null,
    observacao text not null,
    psicologo_id int not null,
    paciente_id int not null,
    
    constraint psic_atendimentos foreign key (psicologo_id) references psicologos(id),
    constraint pac_atendimentos foreign key (paciente_id) references pacientes(id)
);