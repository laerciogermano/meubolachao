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
		Artista.findOne({nome : obj.nome}, function(err, data){
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

	ArtistaSchema.methods.create = create;
	mongoose.model('Artista', ArtistaSchema);
};


