let operacionesBancarias = [30, -28, 500, -90, 45]

function calcularMontos(operacionesCliente){
    let montoDepositos = 0
    let montoRetiros = 0
    let saldoActual = 0

    for (let i = 0; i < operacionesCliente.length; i++) {
        if (operacionesCliente[i]>0){  // deposito
            montoDepositos += operacionesCliente[i]
        }
        else {  // retiro
            montoRetiros -= operacionesCliente[i]
        }

        saldoActual += operacionesCliente[i]
    }

    return [montoDepositos, montoRetiros, saldoActual]
}

function retornarTodo(nombre, apellido, operaciones, callback){
    let saldos = callback(operaciones)
    console.log("Estimada "+nombre+" "+apellido+":")
    console.log("el monto total de los depsitods es: "+saldos[0])
    console.log("el monto total de los retiros es: "+saldos[1]);
    console.log("el sald actuial es: "+saldos[2]);
    return [nombre+" "+apellido].concat(saldos)
}

console.log(retornarTodo("mria", "gonazale", operacionesBancarias, calcularMontos))