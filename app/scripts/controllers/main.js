'use strict';
/**
 * @ngdoc function
 * @name artuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artuApp
 */
angular.module('artuApp').controller('MainCtrl', function ($scope) {
    var appName = $('.appName');
    console.log($scope);
    var paintBallContainer = $(".paint-ball-container");
    var counter = 0;
    setInterval(function () {
        counter++;
        paintBallContainer.append('<div class="paint-ball-' + counter + ' '+randomFrom(['blue', 'cyan', 'green', 'red', 'yellow'])+'"></div>');
        inittlMax('paint-ball-' + counter + '');
    }, 1000);
    var tlMax = new TimelineMax();
    var tl = new TimelineLite();

    function inittlMax(id) {
        //tl.add(TweenLite.to($('.'+id), 1.5,{top: getRandomTop(), left: getRandomLeft()}));
        tl.to($('.' + id), 1, {
            top: getRandomTop(),
            left: getRandomLeft(),
            scale: 0.6,
            opacity: 1
        });
        // tl.from($('.' + id), 1, {
            
        // });
    };

    function getRandomLeft() {
        return Math.floor(Math.random() * (document.body.scrollWidth - 100 + 1)) + 100 + 'px';
    };

    function getRandomTop() {
        return Math.floor(Math.random() * (document.body.scrollHeight - 100 + 1)) + 100 + 'px';
    }

    function randomFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
});