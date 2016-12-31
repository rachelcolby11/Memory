'use strict';

/**
 * @ngdoc function
 * @name memoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoryApp
 */
angular.module('memoryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
