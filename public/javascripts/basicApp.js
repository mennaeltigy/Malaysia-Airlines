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
<<<<<<< HEAD
        templateUrl: 'booking.html'

              })
      .when('/submit', {
        templateUrl: 'payment.html'
              })
=======
        templateUrl: 'book.html'
              })
      .when('/confirm', {
        templateUrl: 'confirmation.html'
      })
>>>>>>> 61aab6c62552870de76db4b67bbc3526ad0f537f
      .when('/search', {
          templateUrl: 'search.html',
          controller: 'SController'
      })
<<<<<<< HEAD
      .when('/confirmation', {
          templateUrl: 'confirmation.html'     
=======
      .when('/payment', {
          templateUrl: 'payment.html',
          controller: 'PaymentController'
>>>>>>> 61aab6c62552870de76db4b67bbc3526ad0f537f
      });
      
  }]);
