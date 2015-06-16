var app = angular.module('app', []);


app.controller('controller', ['$scope', '$http', function($scope, $http){
	$scope.artista = [];
	$scope.criarArtista = {};

	$scope.Create = function(){
		$http.post('/api/artista/create', $scope.criar)
		.success(function(data){
			console.log(data);
		})
		.error(function(data){
			console.log(data);	
		})	

	}
	
}]);


