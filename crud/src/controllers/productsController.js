const fs = require('fs');
const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const productService = require('../data/productService')

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("products.ejs", { 
			products: productService.getAll(), 
			toThousand: toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render("detail.ejs", { 
			product: productService.getOneById(req.params.id),
			toThousand: toThousand 
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("product-create-form.ejs")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		console.log(req.file);
		
		productService.save(req.body, req.file);
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render("product-edit-form.ejs", { 
			product: productService.getOneById(req.params.id)
		})
	},
	// Update - Method to update
	update: (req, res) => {
		productService.edit(req.body);
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		productService.deleteById(req.params.id);
		res.redirect('/products');
	}
};

module.exports = controller;