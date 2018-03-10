import { merge, mergeComSpread, mergeArray } from './exercicios';

test('Merge entre dois objetos', ()=>{
    const objeto1 = {
        id: 1,
        nome: 'Objeto 1'
    };

    const objeto2 = {
        email: 'elton.tanamati@gmail.com',
        telefone: '9999999999'
    }
    
    const result = merge(objeto1, objeto2);

    expect(result.id).toEqual(1);
    expect(result.nome).toEqual('Objeto 1');
    expect(result.email).toEqual('elton.tanamati@gmail.com');
    expect(result.telefone).toEqual('9999999999');
});

test('Merge entre dois objetos - spread', ()=>{
    const objeto1 = {
        id: 1,
        nome: 'Objeto 1'
    };

    const objeto2 = {
        email: 'elton.tanamati@gmail.com',
        telefone: '9999999999'
    }
    
    const result = mergeComSpread(objeto1, objeto2);

    expect(result.id).toEqual(1);
    expect(result.nome).toEqual('Objeto 1');
    expect(result.email).toEqual('elton.tanamati@gmail.com');
    expect(result.telefone).toEqual('9999999999');
});

test('Merge dois arrays', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [10, 20, 30, 40, 50];

    const result = mergeArray(array1, array2);

    console.log(result);
    expect(result).toHaveLength(10);
});