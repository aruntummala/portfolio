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
    var appName = $('.appName');
    console.log($scope);
    var splitText = new SplitText($('.appName'),{type: 'chars'});
    TweenMax.staggerFrom(splitText.chars, 0.5, {opacity: 0.5, rotation: -180, y:-100, ease: Back.easeOut},0.02);
    var mask_about_me = $('.mask_about_me');
    var mask_technolgy_stack = $('.mask_technolgy_stack');
    var mask_left_top = $('.mask_left_top');
    var mask_right_top = $('.mask_right_top');
    var nav_list1 = $('.nav_list1');
    var nav_list2 = $('.nav_list2');
    var nav_list3 = $('.nav_list3');

    var timeLineMax = new TimelineMax({yoyo:true});
    //TweenLite.set($('.myNav'), {visibility:"visible"});
    //timeLineMax.from(nav_list1, 2, {left: '-=100px,', delay: 1});
    //timeLineMax.from(nav_list2, 2, {left: '-=100px,', delay: 1});
    //timeLineMax.from(nav_list3, 2, {left: '-=100px,', delay: 1});
    //TweenMax.to(nav_list1,2,{left: '250px'});
    TweenLite.to(nav_list1, 2, {physics2D:{velocity:-320, angle:180, acceleration:320}}, {delay:1});
    TweenLite.to(nav_list2, 2, {physics2D:{velocity:-400, angle:180, acceleration:400}}, {delay:2});
    TweenLite.to(nav_list3, 2, {physics2D:{velocity:-500, angle:180, acceleration:500}}, {delay:3});

    //TweenLite.to(nav_list3, 2, {scrollTo:{y:400}, ease:Power2.easeOut});
    //TweenLite.from(mask_about_me,2,{backgroundColor:"#1BBC9B", top: '500px'});
    //TweenLite.from(mask_technolgy_stack,2,{backgroundColor:"#16A086", top: '500px'});
    
    /*TweenLite.to(mask_left_top,2,{bottom:'600px',backgroundColor:"black", borderBottomColor:"black"});
    TweenLite.to(mask_left_top,2,{right:appName.width()-appName.width()/10,backgroundColor:"black", borderBottomColor:"black"});
    TweenLite.to(mask_right_top,2,{bottom:'600px',backgroundColor:"black", borderBottomColor:"black"});
    TweenLite.to(mask_right_top,2,{left:appName.width()-appName.width()/10,backgroundColor:"black", borderBottomColor:"black"});
    */
    /*appName.on('hover', 'span', function() {
    	TweenMax.staggerFrom(splitText.chars, 0.5, {opacity: 0.5, rotation: -180, y:-100, ease: Back.easeOut},0.02);
    });*/
    /*var tween = TweenLite.to(appName, 2 , {
    	x: 500,
    	ease: Circ,
    	delay: 2
    });*/
  });
