export const merge = (obj1, obj2) =>{
    let retorno = {};
    
    /*for(const element in obj1){
        retorno[element] = obj1[element];
    };

    for(const element in obj2){
        retorno[element] = obj2[element];
    };*/
    
    Object.getOwnPropertyNames(obj1).forEach(element => {
        console.log(element);
        retorno[element] = obj1[element];
    });

    Object.getOwnPropertyNames(obj2).forEach(element => {
        console.log(element);
        retorno[element] = obj2[element];
    });

    return retorno;
    /*return {
        id: obj1.id,
        nome: obj1.nome,
        email: obj2.email,
        telefone: obj2.telefone
    }*/
};

export const mergeComSpread = (obj1, obj2) =>{
    return {
        ...obj1,
        ...obj2
    };
};


export const mergeArray = (array1, array2) => {

    let retorno = [];

    array1.forEach( element => retorno.push(element));
    array2.forEach( element => retorno.push(element));

    //array2.forEach( element => array1.push(element));

    /*for(const element of array2){
        array1.push(element);
    }*/
    
    return retorno;
    /*return [
        ...array1,
        ...array2
    ]*/
}

export const mergeArrayConcat = (array1, array2) => {

    return array1.concat(array2);

    /*array1.forEach( element => retorno.push(element));
    array2.forEach( element => retorno.push(element));*/

    //array2.forEach( element => array1.push(element));

    /*for(const element of array2){
        array1.push(element);
    }*/
    
    /*return [
        ...array1,
        ...array2
    ]*/
}

export const mergeArraySpread = (array1, array2) => {
    return [
        ...array1,
        ...array2
    ]
}