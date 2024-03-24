let importar = require("./collectibles.js")

let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figuras: unifiedCollectibles,

    listFigures: function() {
        this.figuras.forEach(element => {
            console.log(element);
        });
    },

    figuresByBrand: function(marca){
        return this.figuras.filter(element => {
            return (element.marca==marca)
        });
    }
}
