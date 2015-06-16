var app = angular.module('app', []);


app.controller('controller', ['$scope', '$http', function($scope, $http){
	$scope.criarArtista = {};
	$scope.artistas = [];

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

	// bootstrap
	getAll();

	$scope.create = create;
	$scope.getAll = getAll;
	
}]);


