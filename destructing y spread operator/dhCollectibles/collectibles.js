const fs = require("node:fs");

let importar = (marca) => {
    let ruta = "";

    switch (marca) {
        case "Hot Toys":
            ruta = "dhCollectibles/datos/figuras1.json";
            break;
        case "Bandai":
            ruta = "dhCollectibles/datos/figuras2.json";
            break;
        case "Star Wars":
            ruta = "dhCollectibles/datos/figuras3.json";
            break;
        default:
            console.log("RUTA PASADA NO EXISTE");
            break;
    }

    return JSON.parse(fs.readFileSync(ruta, "utf-8"));
}

module.exports = importar;