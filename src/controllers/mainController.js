const fs = require('fs');
const path = require('path');

/* 
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */


const controller = {

	index: (req, res) => {

		res.render('index');

	},

	index2: (req, res) => {

		res.render('services');

	},

	index3: (req, res) => {

		res.render('services_design');

	},

	admin: (req, res) => {

		res.render('admin');

	},

	login: (req, res) => {
        let user = req.query.user;
		res.render("admin", { user: user });
    }

	
};

module.exports = controller;
