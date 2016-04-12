var app = angular.module("myApp")
  .controller('ConfirmController', ['$scope', function($scope) { 
  // $scope.Flight = [
 $scope.products =[
{
booking date: "26/03/2016", 
departureDate: "26/04/2016",
arrivalDate : "27/04/2016",
passenger: [{
        "name" : "menna","age" :"23","nationality":"egyptian" ,"email" : "menna.tigi@live.com",
        "adress":"12pyramids.st","country" :"egypt" ,"telephone":"0122345678"
        }
        ],
flightNumber:"Malaysia Airline 001" ,
type: "bussiness",
oneway: "1",
charges : [{"title" : "1 ticket","amount" : "1000","description" :"none" }],
discounts : [{"title" : "none","amount" : "0","description" :"none" }],
total : "1000"
},


{
booking date: "12/02/2016", 
departureDate: "29/03/2016",
arrivalDate : "01/04/2016",
passenger: [{"name" : "farida","age" :"26","nationality":"egyptian" ,"email" : "farida.mahdy@live.com",
adress:"15ahlyisawesome.st","country" :"egypt" ,"telephone":"22594368"}
        ],
flightNumber:"002" ,
type: "economy",
oneway: "0",
charges : [{"title" : "2 ticket","amount" : "2500","description" :"none" }],
discounts : [{"title" : "none","amount" : "0","description" :"none" }],
total : "2500"
}


];
}]);