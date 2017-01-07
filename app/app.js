'use strict';

/**
 * @ngdoc overview
 * @name memoryApp
 * @description
 * # memoryApp
 *
 * Main module of the application.
 */
angular
  .module('memoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'about',
    'main'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/main/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode({enabled: true});
  }]);
