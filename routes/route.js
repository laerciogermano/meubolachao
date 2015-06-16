'use strict';

var mongoose = require('mongoose');
var Artista = mongoose.model('Artista');


module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	});

	app.post('/api/artista/create', function(req, res){
		
	});

	app.get('/api/artista/get/:nome', function(req, res){
		
	});

	app.get('/api/artista/remove/:nome', function(req, res){
		
	});

	app.get('/api/artista/getall', function(req, res){
	
	});

};