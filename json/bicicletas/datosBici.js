
function cargarArchivoBicis(){
    let fs = require("node:fs")
    var infoBicis = fs.readFileSync("bicicletas.json", "utf-8");
    return JSON.parse(infoBicis);
}

module.exports = cargarArchivoBicis();
