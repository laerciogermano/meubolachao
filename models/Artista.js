'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	
	var ArtistaSchema = new Schema({
		nome : String,
		foto : String
	});

	function create(obj, callback){
		if(!obj)
			return callback({msg : 'Objeto vazio'});

		if(!obj.nome)
			return callback({msg : 'Nome vazio'});

		if(!obj.foto)
			return callback({msg : 'Foto vazia'});

		var Artista = mongoose.model('Artista');
		Artista.findOne({nome : obj.nome}).exec(function(err, data){
			if(err)
				return callback({msg : 'Erro ao encontrar artista'});
			
			if(data)
				return callback({msg : 'Já existe artista com esse nome'});

			var newArtista = new Artista(obj);
			newArtista.save(function(err, _data){
				if(err)
					return callback({msg : 'Erro ao salvar artista'});

				callback(false, _data);
			});
		});
	};


	function getAll(callback){
		var Artista = mongoose.model('Artista');
		Artista.find({}).exec(function(err, data){
			if(err)
				return callback({msg : 'Erro ao encontrar os artistas'});
			
			callback(false, data);
		});
	};

	function getNome(nome, callback){
		if(!nome)
			return callback({msg: 'O nome vazio'});
		
		var Artista = mongoose.model('Artista');	
		Artista.find({
			nome: nome
		}).exec(function(err, data){
			if(err)
				return callback({msg : 'Erro ao encontrar os artistas'});

			callback(false, data);

		});
	}

	function removeByName(nome, callback){
		if(!nome)
			return callback({msg: 'nome vazio'});
		
		var Artista = mongoose.model('Artista');
		Artista.remove({nome:nome}).exec(function(err, data){
			if(err)
				return callback({msg: 'Erro ao remover artista'});
			callback(false, data);
		});
	}


	ArtistaSchema.methods.create = create;
	ArtistaSchema.methods.getAll = getAll;
	ArtistaSchema.methods.getNome = getNome;
	ArtistaSchema.methods.removeByName = removeByName;

	mongoose.model('Artista', ArtistaSchema);
};





