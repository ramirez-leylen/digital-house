let peliculas = ["turno de dia", "30 noches con mi ex", "bestia", "el monte", "top gun maverick", "elvis", "thor: amor y trueno"];

function peliculaMasVendida(pelicula){
    peliculas.unshift(pelicula.toUpperCase())
    peliculas.pop()
    return pelicula.toUpperCase()
}

peliculaMasVendida("thor: amor y trueno")

let masPeliculas = ["counter-strike", "nop", "vertigo", "nick", "avatar"]

function armarString(arrayPeliculas){
    return arrayPeliculas.join(" ")
}

let stringPelis = armarString(masPeliculas);

masPeliculas.shift();

function unirArrays(primerArray, segundoArray){
    let tercerArray = [];
    return tercerArray.concat(primerArray, segundoArray);
}

console.log(unirArrays(peliculas, masPeliculas));

