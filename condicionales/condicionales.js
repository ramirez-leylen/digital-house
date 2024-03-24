let perfil = "invitado"

switch(perfil){
    case " ":
        console.log("Debe especificar el perfil del usuario");
        break;
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case "asistente":
        console.log("Usted solo tiene permisos de resgristrar, modificar y consultar datos");
        break;
    case "invitado":
        console.log("usted saolo tiene permisos de consultar datos");
        break;
    default:
        console.log("debe especificar un perfil valido");
        break;

}


/// ajuste tarifario de energia electrica

let pagoMes = 200;
let consumoKWH = 200;
let pagoActual = consumoKWH<300 ? pagoMes : pagoMes+((20*pagoMes)/100);

console.log("debido a que su hogar tuvo un consumo de "+pagoActual);
if (pagoMes==pagoActual){
    console.log("se le mantendra el subsidio");
}
else {
    console.log("en base al ajuste tarifario, se ha ajustado el total a paga, que sera de $"+pagoActual);
}


/// traductor condicional

let palabra = "ventana";

switch (palabra){
    case "perro":
        console.log("dog");
        break;
    case "gato":
        console.log("cat");
        break;
    case "puerta":
        console.log("door");
        break;
    case "ventana":
        console.log("window");
        break;
    default:
        console.log("la palabra ingresada es incorrecta");
}

