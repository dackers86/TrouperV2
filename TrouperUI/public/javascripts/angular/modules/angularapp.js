var app = angular.module('TrouperApp', ['ngRoute'], function($routeProvider) {
  // When you put /home, it also automatically handles /home/ as well
  $routeProvider.when('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController'
  });
  $routeProvider.otherwise( { redirectTo: '/login'} );
});