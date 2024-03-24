let fs = require("node:fs");

function Figura(marca, nombre, precio, stock) {
    this.marca = marca;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const figura1 = new Figura("Star Wars", "Luke Skywalker", 10000, 20);
const figura2 = new Figura("Star Wars", "Dark Trooper", 20000, 4);
const figura3 = new Figura("Star Wars", "Ahsoka Tano", 40000, 15);

let array = [figura1, figura2, figura3];
let arrayConvertid = JSON.stringify(array);

fs.writeFileSync("dhCollectibles/datos/figuras3.json", arrayConvertid)


