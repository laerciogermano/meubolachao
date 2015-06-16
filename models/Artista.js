'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	
	var ArtistaSchema = new Schema({
		nome : String,
		foto : String
	});

	mongoose.model('Artista', ArtistaSchema);
};


