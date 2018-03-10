import { extractIdAndNameFromArguments, extractIdAndNameFromObject, extrairCampoDinamicos } from './destructuring';

test(' destructuring from function args', () => {

    const object = {
        id: 1,
        name: 'Eduardo',
        email: 'eduardoj.gardin@gmail.com',
        phone: '5544999493885'
    };
    const result = extractIdAndNameFromArguments(object);

    expect(result).toEqual('1Eduardo');
});

test(' destructuring from object', () => {

    const object = {
        id: 1,
        name: 'Eduardo',
        email: 'eduardoj.gardin@gmail.com',
        phone: '5544999493885'
    };
    const result = extractIdAndNameFromObject(object);

    expect(result).toEqual('1Eduardo');
});

test('Destructuring dois niveis do débito', () => {
    
    const cadastro = {
        tipoCadastro: 1,
        cadastroGeral: 2,
        pessoa: {
            id: 100,
            nome: 'Teste'
        }
    }

    const { cadastroGeral, pessoa: {nome} } = cadastro;
    expect(cadastroGeral).toEqual(2);
    expect(nome).toEqual('Teste');
});

test('Destructuring dois niveis do débito', () => {
    const debito = {
        idDebito: 1,
        valorTotal: 1000,
        parcelas: [
            {parcela: 1,
             situacao: 'A',
             valor: 1000},
            {parcela: 2,
             situacao: 'A',
             valor: 1000},
             {parcela: 3,
              situacao: 'A',
              valor: 1000}
        ]
    }
    
    const resultado = extrairCampoDinamicos(debito, ['idDebito', 'valorTotal']);
    expect(resultado.idDebito).toEqual(1);
    expect(resultado.valorTotal).toEqual(1000);
    
});