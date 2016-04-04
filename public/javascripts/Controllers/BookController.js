var app = angular.module("myApp")
  .controller('BookController', function($scope) { 
 
$scope.redirectTopayment=function(){
$location.path('/payment.html');
  }
