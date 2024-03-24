const fs = require('fs');
const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productService = require('../data/productService')

const controller = {
	index: (req, res) => {
		res.render("index", {
			productsVisited: productService.getAllByCategory("visited"), 
			productsOnSale: productService.getAllByCategory("in-sale"),
			toThousand: toThousand,
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
