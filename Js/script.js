// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

//  Set the width of the side navigation to 0 and the left margin of the page content to 0 
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }\


// script.js

    // create the module and name it scotchApp

    // create the controller and inject Angular's $scope

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
                controller  : 'Getintouch'
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

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });