var app = angular.module("myApp")
  .controller('HomeController', ['$scope', function($scope) { 
    this.tab=1;
this.selectTab=function(setTab){
  this.tab=setTab;
}
this.isSelected= function(checkTab){
  return this.tab===checkTab;
} 
}]);