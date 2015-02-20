'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('MoiCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];

    $scope.janna = [
      {"nimi": "Oskarin virma", "ping": 255, "alue": "Pohjois-Korea"},
      {"nimi": "Oskarin virma", "ping": 255, "alue": "Pohjois-Korea"},
      {"nimi": "Oskarin virma", "ping": 255, "alue": "Pohjois-Korea"},
      {"nimi": "Oskarin virma", "ping": 255, "alue": "Pohjois-Korea"},
      {"nimi": "Oskarin virma", "ping": 255, "alue": "Pohjois-Korea"},
      {"nimi": "Oskarin virma", "ping": 255, "alue": "Pohjois-Korea"},
      {"nimi": "Oskarin virma", "ping": 255, "alue": "Pohjois-Korea"}
    ]
  });
