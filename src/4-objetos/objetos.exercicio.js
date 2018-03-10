const definicao = 'Praticamente tudo é objeto, exceto os tipos primitivos da linguagem';

const nome = 'Elton Tanamati';
const email = 'elton.tanamati@gmail.com';
const idade = 27;

const eltonLiteral = {
    nome: nome,
    email: email,
    idade: idade
};

const eltonProperty = {};
eltonProperty.nome = eltonLiteral.nome;
eltonProperty.email = eltonLiteral.email;
eltonProperty.idade = eltonLiteral.idade;

const eltonPropertyKey = {};
eltonPropertyKey['nome'] = eltonLiteral.nome;
eltonPropertyKey['email'] = eltonLiteral.email;
eltonPropertyKey['idade'] = eltonLiteral.idade;

const nomeKey = 'nome';
const emailKey = 'email';
const idadeKey = 'idade';

const eltonDinamicProperty = {};
eltonDinamicProperty[`${nomeKey}_key`] = eltonLiteral.nome;
eltonDinamicProperty[`${emailKey}_key`] = eltonLiteral.email;
eltonDinamicProperty[`${idadeKey}_key`] = eltonLiteral.idade;

const eltonConciseProperty = {
    nome,
    email,
    idade
};

const pessoas = [ eltonLiteral, eltonProperty, eltonPropertyKey, eltonDinamicProperty ];

module.exports = { definicao, eltonLiteral, eltonProperty, eltonPropertyKey, eltonDinamicProperty, eltonConciseProperty, pessoas };