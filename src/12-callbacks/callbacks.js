
export const callbackDef = {
    definicoes: [
        'Função que será chamada quando algo vai acontecer',
        '#Chamada não atendida',
        ''
    ],
    vantagens: [
        '????'
    ],
    desvantagens: [
        'Não é garantido por tipo',
        'Encadeamento complexo e difícil de ler e manter conforme o código for evoluindo',
        'Não garante o tratamento de erros'
    ]
};

export const simpleCallback = (callback = () => 'Empty callback') => {

    return callback('My first callback');
};


export const chamarApiRest = (url, sucesso, erro) => {
    if (url === '/api/treinamento/pessoa') {
        return sucesso ({nome: "joao"});
    } else {
        return erro ('erro');
    }
}