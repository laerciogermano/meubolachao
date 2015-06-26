 'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	
	var AlbumSchema = new Schema({
		artista: String,
		nome : String,
		foto : String,
		faixas : String,
		ano : String
	});

	function create(obj, callback){
		if(!obj)
			return callback({msg : 'Objeto vazio'});

		if(!obj.nome)
			return callback({msg : 'Nome vazio'});

		if(!obj.foto)
			return callback({msg : 'Foto vazia'});

		var Album = mongoose.model('Album');
		Album.findOne({nome : obj.nome}).exec(function(err, data){
			if(err)
				return callback({msg : 'Erro ao encontrar Album'});
			
			if(data)
				return callback({msg : 'Já existe Album com esse nome'});

			var newAlbum = new Album(obj);
			newAlbum.save(function(err, _data){
				if(err)
					return callback({msg : 'Erro ao salvar Album'});

				callback(false, _data);
			});
		});
	};


	function getAll(callback){
		var Album = mongoose.model('Album');
		Album.find({}).exec(function(err, data){
			if(err)
				return callback({msg : 'Erro ao encontrar os Albums'});
			
			callback(false, data);
		});
	};

	function getNome(nome, callback){
		if(!nome)
			return callback({msg: 'O nome vazio'});
		
		var Album = mongoose.model('Album');	
		Album.find({
			nome: nome
		}).exec(function(err, data){
			if(err)
				return callback({msg : 'Erro ao encontrar os Albums'});

			callback(false, data);

		});
	}

	function removeByName(nome, callback){
		if(!nome)
			return callback({msg: 'nome vazio'});
		
		var Album = mongoose.model('Album');
		Album.remove({nome:nome}).exec(function(err, data){
			if(err)
				return callback({msg: 'Erro ao remover Album'});
			callback(false, data);
		});
	}


	AlbumSchema.methods.create = create;
	AlbumSchema.methods.getAll = getAll;
	AlbumSchema.methods.getNome = getNome;
	AlbumSchema.methods.removeByName = removeByName;

	mongoose.model('Album', AlbumSchema);
};





