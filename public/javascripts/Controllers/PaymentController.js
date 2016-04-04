var app = angular.module("myApp")
  .controller('MainController', function($scope, Info) {
$scope.info = Info.getInfo();
$scope.CreditCardsAccepted="";
$scope.CreditNumber="";
$scope.ExpireDate="";
$scope.cvv="";
$scope.NameOnCard="";
$scope.Country="";
$scope.State="";
$scope.PhoneNumber="";
$scope.pay=function(){
console.log($scope.CreditCardsAccepted)
};
  }
  $scope.redirectToConfirmation = function () {
  	$location.path('/confirmation.html');
  }
  );