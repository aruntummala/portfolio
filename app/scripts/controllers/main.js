'use strict';

/**
 * @ngdoc function
 * @name artuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artuApp
 */
angular.module('artuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var appName = $('.appName');
    console.log($scope);
    var splitText = new SplitText($('.appName'),{type: 'chars'});
    TweenMax.staggerFrom(splitText.chars, 0.5, {opacity: 0.5, rotation: -180, y:-100, ease: Back.easeOut},0.02);
    /*appName.on('hover', 'span', function() {
    	TweenMax.staggerFrom(splitText.chars, 0.5, {opacity: 0.5, rotation: -180, y:-100, ease: Back.easeOut},0.02);
    });*/
    /*var tween = TweenLite.to(appName, 2 , {
    	x: 500,
    	ease: Circ,
    	delay: 2
    });*/
  });
