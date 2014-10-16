'use strict';

/**
 * @ngdoc function
 * @name frankApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frankApp
 */
angular.module('frankApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
