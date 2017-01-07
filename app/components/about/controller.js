'use strict';

angular.module('memoryApp',['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'components/about/index.html',
      controller: 'AboutController',
      controllerAs: 'About'
    });
  }])
  .controller('AboutController', ['$scope', '$location',
    function ($scope, $location) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
]);
