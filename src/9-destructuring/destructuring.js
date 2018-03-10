            
export const extractIdAndNameFromArguments = ({ id, name }) => {

    return `${id}${name}`;
};

export const extractIdAndNameFromObject = object => {

    const { id, name } = object;

    return `${id}${name}`;
};

export const extrairCampoDinamicos = (debito, campos ) => {

    let extraidos = {};

    /*
    campos.forEach(campo => {            
        extraidos[campo] = debito[campo];   
    });*/

    for(let i = 0; i <  campos.length; i++){
        const {[campos[i]]: valor} = debito;
        extraidos[campos[i]] = valor;
    }

    /*campos.forEach(campo => {
        const{ campo: valor } = debito;
        console.log(campo);
        console.log(valor);
        extraidos[campo] = valor;
    });*/

    /*const {[campos[0]]: idDebito, [campos[1]]: valorTotal} = debito;
    return {
        idDebito: idDebito,
        valorTotal: valorTotal
    };*/

    return extraidos;
};


export const extractOnly = (object, ...fields) =>{
    Object.keys(object)
    .filter(k => fields.includes(k))
    .reduce((a, k) => {a[k] = object[k]; return a;}, {});
}