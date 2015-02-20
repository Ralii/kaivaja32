'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:TechnologyCtrl
 * @description
 * # TechnologyCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('TechnologyCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.donut = [
      {value: 100, color: 'hsla(180, 75%, 25%, 1)'},
      {value: 0, color: 'hsla(180, 85%, 5%, .7)'}
    ];
});

