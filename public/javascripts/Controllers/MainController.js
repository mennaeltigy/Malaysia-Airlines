var app = angular.module("myApp")
  .controller('MainController', ['$scope', function($scope) { 
  // $scope.Flight = [
 $scope.products = [
  	{ 
    	Name: 'Malasia Airlines', 
    	price: 190, 
    	Destination: 'Barcelona', 
    	Cover: 'images/the-book-of-trees.jpg'
    	
  	}, 
	{ 
    	Name: 'Malasia Airlines', 
    	price: 490, 
    	Destination: 'Paris', 
    	Cover: 'images/the-book-of-trees.jpg'
    	
  	}, 
  		{ 
    	Name: 'Malasia Airlines', 
    	price: 390, 
    	Destination: 'New York', 
    	Cover: 'images/the-book-of-trees.jpg'
    	
  	}, 
  		{ 
    	Name: 'Malasia Airlines', 
    	price: 290, 
    	Destination: 'London', 
    	Cover: 'images/the-book-of-trees.jpg'
    	
  	}

];
}]);