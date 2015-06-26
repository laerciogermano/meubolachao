'use strict';

var mongoose = require('mongoose');
var Artista = mongoose.model('Artista');
var ArtistaMethods = new Artista();

//middlewares

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/artista.html', function(req, res){
		res.render('artista');
	});

	app.get('/album.html', function(req, res){
		res.render('album');
	});

	app.post('/api/artista/create',function(req, res){
		var params = req.body;
		ArtistaMethods.create(params, function(err, data){
			if(err)
				return res.status(400).json(err);

			res.json(data);			
		});
		
	});

	app.get('/api/artista/get/:nome', function(req, res){
		var nome = req.params.nome;
		ArtistaMethods.getNome(nome, function(err, data){
			if(err)
				return res.status(400).json(err);
			res.json(data);
		});

		
	});

	app.get('/api/artista/remove/:nome', function(req, res){
		var nome = req.params.nome;
		ArtistaMethods.removeByName(nome, function(err, data) {
			if(err)
				return res.status(400).json(err);
			res.json(data);
		});
		
	});

	app.get('/api/artista/getall', function(req, res){
		ArtistaMethods.getAll(function(err, data){
			if(err)
				return res.status(400).json(err);

			res.json(data);
		});
	});

};