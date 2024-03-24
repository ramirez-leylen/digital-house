let nombre = 'Julian';
let apellido = 'Julianez';
let sueldoActual = 1400;
let porcentajeAumento = 35;

let calculoAumento = sueldoActual*porcentajeAumento/100;

let nuevoSueldo = sueldoActual + calculoAumento;

console.log('Hola, estimad@ ' + nombre + apellido);
console.log('En base a su sueldo actual:');
console.log('$' + sueldoActual);
console.log('Ha recibido un aumento del ' + porcentajeAumento + '%:');
console.log('$' + calculoAumento);
console.log('y su nuevo sueldo es de: $' + nuevoSueldo);
