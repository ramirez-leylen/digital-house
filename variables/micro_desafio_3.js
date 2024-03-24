
// function noPares(numero){
//     let impares = 0;
//     for(let i=0; i<numero; i+=2){
//         impares++;
//     }
//     return impares;
// }

// console.log(noPares(5));

function esPrimo(n){
    if(n<=1){
        return false;
    }

    for(let i = 2; i<n ; i++){
        if(n%i == 0) return false;
    }

    return true;
}

console.log(esPrimo(4));