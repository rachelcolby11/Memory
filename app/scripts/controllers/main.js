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

    // The back of the cards
    $scope.pokeball = 'http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest';

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

     var currentlyFlipped = 0;
     var pokemon1;

     $scope.flip = function() {
       if (currentlyFlipped === 0) {
         // flip 1st card over
         this.front = true;
         currentlyFlipped++;
         pokemon1 = this.pokemon;
       } else if (currentlyFlipped === 1) {
         // flip 2nd card over
         this.front = true;
         // check if they match
         if (this.pokemon === pokemon1) {
           console.log('Match!');
           // if they match, remove from the board
         } else {
           console.log('Not a match');
           // if they don't match, flip cards back over
         }
         currentlyFlipped = 0;
       }
     };
  });
