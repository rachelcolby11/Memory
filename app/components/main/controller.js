'use strict';

angular.module('memoryApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'components/main/index.html',
      controller: 'MainController',
      controllerAs: 'Main'
    }).when('/main', {
      templateUrl: 'components/main/index.html',
      controller: 'MainController',
      controllerAs: 'Main'
    });
  }])
  .controller('MainController', ['$scope', '$location',
    function ($scope, $location) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
]);
