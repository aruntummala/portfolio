'use strict';
/**
 * 
 */
angular.module('artuApp').
	controller('MainContentCtrl', function ($scope) {
		$scope.data=['Home' ,'About Me', 'Contact'];
		var nav_List = $('.nav_list');
		var main_Content = $('#main_content');
		//TweenLite.to('#main_content', 1, {scrambleText:"THIS IS NEW MAIN"});
		//TweenLite.to('.main_content', 1, {scrambleText:{text:"THIS IS NEW TEXT", chars:"XO", revealDelay:0.5, speed:0.3, newClass:"myClass"}}); 
	});