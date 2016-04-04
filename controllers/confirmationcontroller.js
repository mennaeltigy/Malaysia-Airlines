var app = angular.module("myApp")
   .controller('confirmationcontroller', function($scope) {

$scope.redirectTobooking = function (){
	$locartion.path('/booking.html');
};
});