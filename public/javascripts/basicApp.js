angular.module('myApp', [
        'ngRoute'
    ]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/flights', {
        templateUrl: 'outgoing.html',
        controller: 'MainController'
      })
      .when('/book', {
        templateUrl: 'book.html'
              })
      .when('/confirm', {
        templateUrl: 'confirmation.html'
              });
  }]);