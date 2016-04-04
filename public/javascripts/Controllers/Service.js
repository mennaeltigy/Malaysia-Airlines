var app = angular.module("myApp");
app.factory('Data',function(){
	 var factory = {};
	 factory = function () {
	 	return "hi"
	 }

	 return factory;
});

app.service('de', function(Data){
this.de = function() {
	return "hi"
}
});