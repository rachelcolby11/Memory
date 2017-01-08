'use strict';

/**
 * @ngdoc function
 * @name memoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoryApp
 */
angular.module('memoryApp')
  .controller('MainCtrl', function ($scope, $timeout) {

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

     var currentlyFlipped = [];
     $scope.score = 0;

     var compare = function(card1, card2) {
       if (card1.pokemon === card2.pokemon) {
         // if they match, remove from the board and increment score
         card1.remove = true;
         card2.remove = true;
         $scope.score++;
       } else {
         // if they don't match, flip cards back over and decrement score
         card1.front = false;
         card2.front = false;
         $scope.score--;
       }
       currentlyFlipped = [];
     };

     $scope.flip = function() {
       if (currentlyFlipped.length === 0) {
         // flip 1st card over
         this.front = true;
         currentlyFlipped.push(this);
       } else if (currentlyFlipped.length === 1) {
         // if clicking on same card a second time, do nothing
         if (currentlyFlipped[0] === this) {
           return;
         } else {
           // flip 2nd card over
           this.front = true;
           currentlyFlipped.push(this);
           // check if they match
           $timeout( function(){ compare(currentlyFlipped[0], currentlyFlipped[1]); }, 1000);
         }
       }
     };
  });
