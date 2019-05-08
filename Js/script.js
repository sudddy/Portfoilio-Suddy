
    var scotchApp = angular.module('scotchApp', ['ngRoute']);
    scotchApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });


     

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            .when('/Resume', {
                templateUrl : 'Resume.html',
                controller  : 'resume'
            })

            // route for the about page
            .when('/Aboutme', {
                templateUrl : 'Aboutme.html',
                controller  : 'AboutmeController'
            })

            // route for the contact page
            .when('/GetinTouch', {
                templateUrl : 'GetinTouch.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('AboutmeController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope,$http) {
        var personalDetails;
        // $scope.message = 'Contact us! JK. This is just a demo.';
        $http.get("http://localhost:4000/getDetails").then(function(response) {
            personalDetails = response.data[0];  
            $scope.personalDetails = response.data[0];
            console.log($scope.personalDetails.homePhone);
    });
    
    });





    