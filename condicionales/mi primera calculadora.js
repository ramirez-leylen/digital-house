let valorA = 2;
let valorB = 3;
let operacion = "dividir";

switch (operacion){
    case "sumar":
        console.log("el resultado de "+valorA+" + "+valorB+" es "+(valorA+valorB));
        break;
    case "restar":
        console.log("el resultado de "+valorA+" - "+valorB+" es "+(valorA-valorB));
        break;
    case "multiplicar":
        console.log("el resultado de "+valorA+" * "+valorB+" es "+(valorA*valorB));
        break;
    case "dividir":
        console.log("el resultado de "+valorA+" / "+valorB+" es "+(valorA/valorB));
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir.")
}