let mostrarDiezMas = num => {
    for (let i = 1; i <= 10; i++) {
        console.log(num+i)
    }
}
// mostrarDiezMas(4)

let tresEnTres = () => {
    for (let i = 1; i <= 57; i+=3) {
        console.log(i)
    }
}
// tresEnTres()

let superSumatoria = (a, b) => {
    let suma = 0;
    for (let i = a; i <= b; i++) {
        suma+=i;
    }
    console.log("suma de todos los numeros entre "+a+" y "+b+":"+suma);
}
// superSumatoria(0,100)


let letrasMayusculas = (cadena) => {
    for (let i = 0; i < cadena.length; i++) {
        console.log(cadena[i].toUpperCase())
    }
}
// letrasMayusculas("tu vieja")


let soloPares = numeros => {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]%2 == 0) {
            pares.push(numeros[i])
        }
    }
    return pares;
}
// console.log(soloPares([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

function laClaveSecreta(cadena){
    let frase = "";
    console.log(cadena.length);
    for(let i = 0; i < cadena.length; i++){
        if(cadena[cadena.length-1-i]!="*"){
            frase += cadena[cadena.length-1-i];
        }
        
    }
    return frase;
}

console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]))
