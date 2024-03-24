let electros = ["heladera", "microondas", "tostadora", "horno", "aspiradora", "batidora"];

console.log(electros);

let primero = electros.shift();
electros.push(primero);
console.log(electros);

electros.push("freezer", "aromatizador");
console.log(electros);

console.log("cantidad de elementos: " + electros.length);

if (electros.includes("microondas")){
    console.log("encontrado");
} else {
    console.log("no encintrado");
}

let cadena = electros.join(" ")
console.log(cadena)
console.log(cadena.length)

let conHorno = cadena.replace("horno", "horno-electrico")
console.log(conHorno)

let nuevoArray = conHorno.split(" ")
console.log(nuevoArray)