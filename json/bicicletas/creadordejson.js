function Bicicleta(marca, modelo, rodado, anio, color, peso, tipo, precio, vendida){
    this.marca = marca;
    this.modelo = modelo;
    this.rodado = rodado;
    this.anio = anio;
    this.color = color;
    this.peso = peso;
    this.tipo = tipo;
    this.precio = precio;
    this.vendida = vendida;
}

let bici1 = new Bicicleta("fierce", "sunshine", 16, 2019, "negro", 13, "paseo", 20000, true);
let bici2 = new Bicicleta("olmo", "regal", 26, 2020, "rosa", 16, "retro", 30000, false);

let bicis = [bici1, bici2];

let enString = JSON.stringify(bicis);
console.log(enString);