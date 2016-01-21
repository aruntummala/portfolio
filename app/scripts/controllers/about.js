'use strict';

/**
 * @ngdoc function
 * @name artuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the artuApp
 */
angular.module('artuApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
