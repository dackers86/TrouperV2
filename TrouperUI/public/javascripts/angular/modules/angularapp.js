var app = angular.module('TrouperApp', ['ngRoute'], function($routeProvider, $locationProvider) {
  // When you put /home, it also automatically handles /home/ as well
  $routeProvider.when('/account', {
    templateUrl: 'partials/account.html',
    controller: 'HomeController'
  });
  $routeProvider.otherwise( { redirectTo: '/login'} );

  // configure html5 to get links working
  // If you don't do this, you URLs will be base.com/#/home rather than base.com/home
  $locationProvider.html5Mode(true);
});