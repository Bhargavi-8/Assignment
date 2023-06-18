var app = angular.module('myApp', ['ngRoute', 'ngDragDrop']);
(function() {
        app.config(function ($routeProvider) {
             
            $routeProvider.when('/', {
                templateUrl: 'Login/login.html',
                controller: 'LoginController'
            }).when('/home/:username', {
                templateUrl: 'home.html',
                controller: 'HomeController'
            }).otherwise({
                redirectTo: "/"
            });
        });
  })();