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
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
});

