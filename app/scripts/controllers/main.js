'use strict';

/**
 * @ngdoc function
 * @name memoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoryApp
 */
angular.module('memoryApp')
  .controller('MainCtrl', function ($scope) {

    // The front of the cards
    const BULBASAUR = 'http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png';
    const CHARMANDER = 'http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png';
    const SQUIRTLE = 'http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png';
    const PIKACHU = 'http://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png';

    $scope.pokemon = [
       {
         name: 'Bulbasaur',
         src: BULBASAUR
       },
       {
         name: 'Charmander',
         src: CHARMANDER
       },
       {
         name: 'Squirtle',
         src: SQUIRTLE
       },
       {
         name: 'Pikachu',
         src: PIKACHU
       }
     ];
  });
