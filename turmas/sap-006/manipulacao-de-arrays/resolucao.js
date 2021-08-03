// Como transformar o array abaixo em um novo array
// somando +1 em cada um dos valores?
let array = [10, 20, 33, 4, 5, 10, 20, 50];

// let index = 2;
// variáveis auxiliares ; condição (até quando o laço deve rodar) ; modificações de variáveis auxiliares

// são iguais:
// index = index + 1
// index += 1
// index++
function mapDoPomodoroDoGabs(arrayInicial, callback) {
    const novoArray = [];

    for(let index = 0; index < arrayInicial.length; index++) {
        // index: posicao
        // array[index]: valor do array
        const valor = arrayInicial[index];
        const novoValor = callback(valor);
        novoArray.push(novoValor)
    }

    return novoArray;
}


// chamada da funcao
const arraySomadoDogabs = mapDoPomodoroDoGabs(array, function(item) {
    const novoValor = item + 1;
    return novoValor;
})
const arraySomado = array.map((item) => item + 1);
// const arraySomado = array.map((item) => {
    // return item + 1
// });
// const arraySomado = array.map(function(item) {
    // return item + 1
// });

console.log(arraySomadoDogabs)
console.log(arraySomado)



// Como filtrar esse array para só possuir dados pares?
array = [1, 2, 3, 4, 5, 6];

function filterDoPomodoroDoGabs(arrayInicial, callback, valorInicial) {
    const concatenador = [];

    for(let index = 0; index < arrayInicial.length; index++) {
        // index: posicao
        // array[index]: valor do array
        const valor = arrayInicial[index];
        if(callback(valor)){
            concatenador.push(valor)
        }
    }

    return concatenador;
}

function filtradora() {
    return true
}

arrayFiltradoDoGabs = filterDoPomodoroDoGabs(array, filtradora)
arrayFiltradoDoJs = array.filter(filtradora);

console.log(arrayFiltradoDoGabs)
console.log(arrayFiltradoDoJs)


// Como transformar o array abaixo em um único valor, somando tudo?
array = [1, 2, 3, 4, 5]; // deve ser convertido para 15

function reduceDoPomodoroDoGabs(arrayInicial, callback, valorInicial) {
    let concatenador;
    let index = 0;

    if (valorInicial != undefined) {
        concatenador = valorInicial
    } else {
        index = 1;
        concatenador = arrayInicial[0]
    }

    for(; index < arrayInicial.length; index++) {
        // index: posicao
        // array[index]: valor do array
        const valor = arrayInicial[index];
        concatenador = callback(concatenador, valor)
    }

    return concatenador;
}


function redutora(acumulador, valor) {
    return acumulador + valor
}

arrayReduzidoDoGabs = reduceDoPomodoroDoGabs(array, redutora)
arrayReduzidoDoJs = array.reduce(redutora)
console.log(arrayReduzidoDoGabs)
console.log(arrayReduzidoDoJs)

