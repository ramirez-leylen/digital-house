let datosBici = require("./datosBici.js");

let dhBici = {
    bicicletas: datosBici,

    buscarBici: function(idBuscada){
        let bici = this.bicicletas.filter(function(bicicleta){
            return bicicleta.id == idBuscada;
        })

        if (bici.length==0) {
            return null;
        }
        else {
            return bici[0];
        }
    },

    venderBici: function(id){
        let bici = this.buscarBici(id);
        if(bici==null){
             return "bicicleta no encontrada"
        }
        else {
            bici.vendida = true;
            return bici;
        }
    },

    biciParaLaVenta: function(){
        return bicisDisponibles = this.bicicletas.filter(function (bicicleta) {
            return bicicleta.vendida == false;
        })
    }
}
let sumar = (...numeros) => numeros.reduce((acum,num) => acum +=num);

console.log(sumar(3,4,5,7))