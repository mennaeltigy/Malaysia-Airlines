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
        templateUrl: 'booking.html'

              })
      .when('/submit', {
        templateUrl: 'payment.html'
              })
      .when('/search', {
          templateUrl: 'search.html',
          controller: 'SController'
      });
  }]);

