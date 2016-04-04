var app = angular.module("myApp")
  .controller('MainController' ,function($scope, de) { 
  $scope.data = de.de();
  console.log($scope.data);
  // $scope.Flight = [
 $scope.products = [
  	{ 
    	Name: 'Malasia Airlines', 
    	price: 190, 
    	Destination: 'Barcelona', 
    	Cover: 'images/barcelona.jpg',
      Date: '1/1/2017',
      Time: '12:00'
    	
  	}, 
	{ 
    	Name: 'Malasia Airlines', 
    	price: 490, 
    	Destination: 'Paris', 
    	Cover: 'images/paris.jpg',
      Date: '1/1/2017',
      Time: '22:00'
    	
  	}, 
  		{ 
    	Name: 'Malasia Airlines', 
    	price: 390, 
    	Destination: 'New York', 
    	Cover: 'images/new-york-city.jpg',
      Date: '1/1/2017',
      Time: '19:00'
    	
  	}, 
  		{ 
    	Name: 'Malasia Airlines', 
    	price: 290, 
    	Destination: 'London', 
    	Cover: 'images/london.jpg',
      Date: '1/1/2017',
      Time: '15:00'
    	
  	}

];
});
