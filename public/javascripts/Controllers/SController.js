var app = angular.module("myApp")
    .controller('SController', ['$scope', function($scope) {
        // $scope.Flight = [
        $scope.search = [{

            From: 'Kuala Lampur',
            To: 'Barcelona',
            Departure_Date: '1/1/2017',
            Return_Date: '10,1,2017'


        }, {
            Name: 'Malasia Airlines',
            price: 490,
            Destination: 'Paris',
            Cover: 'images/paris.jpg',
            Date: '1 / 1 / 2017'

        }, {
            Name: 'Malasia Airlines',
            price: 390,
            Destination: 'New York',
            Cover: 'images/new-york-city.jpg',
            Date: '1 / 1 / 2017'

        }, {
            Name: 'Malasia Airlines',
            price: 290,
            Destination: 'London',
            Cover: 'images/london.jpg',
            Date: '1 / 1 / 2017'

        }];
    }]);
