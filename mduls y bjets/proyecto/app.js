const fs = require('node:fs');

var global_data = fs.readFileSync("proyecto/mensaje.txt").toString();

console.log(global_data);


let auto = {
    nombre: "autito",
    brum: function() {
        console.log("brum!");
    }
}

auto.brum()