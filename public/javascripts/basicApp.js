angular.module('myApp', [
        'ngRoute'
    ])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/flights', {
                    templateUrl: 'outgoing.html',
                    controller: 'MainController'
                })
                .when('/search', {
                    templateUrl: 'search.html',
                    controller: 'SController'
                });
        }
    ]);
