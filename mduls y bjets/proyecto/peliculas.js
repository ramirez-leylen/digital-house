let peliculas = []

function Pelicula(id, rating, awards, length, price, genre){
    this.id = id;
    this.rating = rating;
    this.awards = awards;
    this.lengthMinutes = length;
    this.price = price;
    this.genre = genre;
}

peliculas.push(new Pelicula(1, 10, "goya", 140, 1400, "accion"));
peliculas.push(new Pelicula(2, 8, "nobel", 160, 1500, "animacion"));
peliculas.push(new Pelicula(3, 4, "ninguno", 120, 1200, "comedia"));

module.exports = peliculas;