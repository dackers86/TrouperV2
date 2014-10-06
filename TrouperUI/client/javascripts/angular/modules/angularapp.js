var app = angular.module('TrouperApp', ['ngRoute'], function($routeProvider) {
  // When you put /home, it also automatically handles /home/ as well
  $routeProvider.when('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController'
  });


  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise( { redirectTo: '/login'} );
});