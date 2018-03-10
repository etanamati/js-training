const { eltonLiteral, eltonProperty, eltonPropertyKey, eltonDinamicProperty, eltonConciseProperty, pessoas } = require('./objetos.exercicio');

test(' Objetos literal', () => {    
    expect(eltonLiteral.nome).toEqual('Elton Tanamati');
    expect(eltonLiteral.email).toEqual('elton.tanamati@gmail.com');
    expect(eltonLiteral.idade).toEqual(27);
});

test(' Objetos property', () => {
    expect(eltonProperty.nome).toEqual('Elton Tanamati');
    expect(eltonProperty.email).toEqual('elton.tanamati@gmail.com');
    expect(eltonProperty.idade).toEqual(27);
});

test(' Objetos propertyKey', () => {
    expect(eltonPropertyKey.nome).toEqual('Elton Tanamati');
    expect(eltonPropertyKey.email).toEqual('elton.tanamati@gmail.com');
    expect(eltonPropertyKey.idade).toEqual(27);
});

test(' Objetos dinamic property', () => {
    expect(eltonDinamicProperty.nome_key).toEqual('Elton Tanamati');
    expect(eltonDinamicProperty.email_key).toEqual('elton.tanamati@gmail.com');
    expect(eltonDinamicProperty.idade_key).toEqual(27);
});

test(' Objetos concise property', () => {
    expect(eltonConciseProperty.nome).toEqual('Elton Tanamati');
    expect(eltonConciseProperty.email).toEqual('elton.tanamati@gmail.com');
    expect(eltonConciseProperty.idade).toEqual(27);
});