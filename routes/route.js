'use strict';

var mongoose = require('mongoose');
var Artista = mongoose.model('Artista');


module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	});

	app.post('/api/artista/create', function(req, res){
		var params = req.body;
		var newArtista = new Artista();

		newArtista.create(params, function(err, data){
			if(err)
				return res.status(400).json(err);

			res.json(data);			
		});
		
	});

	app.get('/api/artista/get/:nome', function(req, res){
		var nome = req.params.nome;
		var newArtista = new Artista();

		newArtista.getNome(nome, function(err, data){
			if(err)
				return res.status(400).json(err);
			res.json(data);
		});

		
	});

	app.get('/api/artista/remove/:nome', function(req, res){
		
	});

	app.get('/api/artista/getall', function(req, res){
		var newArtista = new Artista();
		newArtista.getAll(function(err, data){

			//console.log(err);
			// // console.log(data);
			if(err)
				return res.status(400).json(err);

			res.json(data);
		});
	});

};