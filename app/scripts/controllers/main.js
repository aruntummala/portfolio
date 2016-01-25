'use strict';
/**
 * @ngdoc function
 * @name artuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artuApp
 */
angular.module('artuApp').controller('MainCtrl', function($scope) {
    var appName = $('.appName');
    console.log($scope);
    var splitText = new SplitText($('.appName'), {
        type: 'chars'
    });
    TweenMax.staggerFrom(splitText.chars, 0.5, {
        opacity: 0.5,
        rotation: -180,
        y: -100,
        ease: Back.easeOut
    }, 0.02);
    $('.screen_container').onepage_scroll({
        sectionContainer: 'div.screen',
        easing: "ease",
        animationTime: 1000,
        pagination: true,
        updateURL: false,
        loop: true,
        keyboard: true,
        responsiveFallback: false,
        direction: "vertical",
        beforeMove: function(index) {
            if(index == 1) {
                var tl = new TimelineMax();
                tl.to(".myName", 3, {
                    scrambleText: {
                        text: "Arun Tummala",
                        chars: "lowerCase",
                        revealDelay: 0.5,
                        tweenLength: false,
                        ease: Back.easeOut
                    }
                });
            }
            $('.logos').css('visibility','hidden');
        },
        afterMove: function(index) {
            if(index===2) {
                $('.logos').css('visibility','visible');
                TweenMax.staggerFrom([$('.logos')[0], $('.logos')[1], $('.logos')[2], $('.logos')[3], $('.logos')[4], $('.logos')[5], $('.logos')[6]], 3, {
                    scale: 0.2,
                    opacity: 0
                }, 0.25);
            }
        }
    });
});