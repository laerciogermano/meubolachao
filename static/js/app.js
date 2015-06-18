var app = angular.module('app', []);


app.controller('controller', ['$scope', '$http', function($scope, $http){
	$scope.criarArtista = {};
	$scope.artistas = [];
	$scope.objProcurar = {};

	function create(obj){
		$http.post('/api/artista/create', obj)
		.success(function(data){
			console.log(data);
		})
		.error(function(data){
			alert(data.msg);	
		})	
	};

	function getAll(){
		$http.get('/api/artista/getall')
		.success(function(data){
			$scope.artistas = data;
		})
		.error(function(data){
			console.log(data);
		});
	};


	function getNome(nome){
		$http.get('/api/artista/get/'+nome)
		.success(function(data){

			console.log(data);

			$scope.artistas = data;
		})
		.error(function(data){
			alert(data);
		});
	};

	function removeByName(nome){
		$http.get('/api/artista/remove/'+nome)
		.success(function(data){
			console.log(data);
			$scope.artistas = data;
		})
		.error(function(data){
			alert(data);
		});
	}

	// bootstrap
	//getAll();
	$scope.removeByName = removeByName;
	$scope.create = create;
	$scope.getAll = getAll;
	$scope.getNome = getNome;
	
}]);


