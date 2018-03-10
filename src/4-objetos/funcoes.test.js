const { equalsClosure, equalsClosureDoClosure, firstClassArrowFunction, oldStyleLiteralFunction, oldStyleExpressionFunction } = require('./funcoes');

test('Not equals closure', () => {

    const object1 = { id: 1, name: 'Test' };
    const object2 = { id: 2, name: 'Test' };
    const equalsIdFunction = equalsClosure('id');

    expect(equalsIdFunction(object1, object2)).toBeFalsy();
});


test('Equals em uma linha', () => {
    const objeto = {
        id: 12,
        nome: 'Nome do object',
        observacao: 'Observação de teste'
    };

    const objeto2 = {
        id: 12,
        nome: 'Nome do object',
        observacao: 'Observação de teste'
    };

    const result = equalsClosure('id')(objeto, objeto2);

    expect(result).toBeTruthy();
});

test('Closure do clousure', () => {
    const objeto = {
        id: 12,
        nome: 'Nome do object',
        observacao: 'Observação de teste'
    };

    const objeto2 = {
        id: 12,
        nome: 'Nome do object',
        observacao: 'Observação de teste'
    };

    const result = equalsClosureDoClosure('id')(objeto, objeto2)(objeto, objeto2);

    expect(result).toBeTruthy();
});

test('Equals closure', () => {
    
    const object1 = { id: 1, name: 'Test' };
    const object2 = { id: 1, name: 'Test' };    
    const equalsIdFunction = equalsClosure('id');

    expect(equalsIdFunction(object1, object2)).toBeTruthy();
});

test('Equals closure', () => {
    
    const object1 = { id: 1, name: 'Test' };
    const object2 = { id: 1, name: 'Test' };    
    const equalsIdFunction = equalsClosure('id');

    expect(equalsIdFunction(object1, object2)).toBeTruthy();
});

test('First class function', () => {    
    expect(firstClassArrowFunction(10)).toEqual(20);
});

test('Literal old style function', () => {
    expect(oldStyleLiteralFunction()).toEqual('Literal old style function');
});

test('Expression oldstyle function', () => {
    expect(oldStyleExpressionFunction()).toEqual('Expression assignment old style');
});

test(' Function assignment ', () => {
    const functionReference = oldStyleExpressionFunction;
    expect(functionReference()).toEqual('Expression assignment old style');
});
