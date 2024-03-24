const { log } = require('console');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productService = {
    getAll: () => products,

    getAllByCategory: (category) => products.filter((product) => product.category == category),

    getOneById: (id) => { return products.find((product) => product.id == id)},


    save: (newProduct, productFile) => {
        newProduct.id = products[products.length - 1].id + 1; // crea id, ARREGLAR?
        newProduct.image = productFile.filename;
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    },

    edit: function(update) {
        let updateIndex = products.findIndex((product) => product.id == update.id);
        products[updateIndex] = update;
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    },

    deleteById: function(id) {
        let deleteIndex = products.findIndex((product) => product.id == id);
        products.splice(deleteIndex, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    }
}

module.exports = productService;