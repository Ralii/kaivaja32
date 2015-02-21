'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('MapCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.otsikko = ["0-50", "50-100", "100-150", "150-200", "200-250", "250-300", "300+"];
    $scope.sarja = ['Ping'];
    $scope.tieto = [
      [65, 59, 80, 81, 56, 55, 40]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

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
