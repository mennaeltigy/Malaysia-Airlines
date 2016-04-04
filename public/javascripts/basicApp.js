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
      .when('/search', {
          templateUrl: 'search.html',
          controller: 'SController'
      })
      .when('/confirmation', {
          templateUrl: 'confirmation.html'     
      });
      
  }]);

