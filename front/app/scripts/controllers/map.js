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
      {"nimi": "Oskarin virma", "ping": 50, "alue": "Suomi"},
      {"nimi": "Nokia Oy", "ping": 100, "alue": "Suomi"},
      {"nimi": "Konecranes", "ping": 150, "alue": "Suomi"},
      {"nimi": "Jippii", "ping": 200, "alue": "Suomi"},
      {"nimi": "Sulake", "ping": 250, "alue": "Suomi"},
      {"nimi": "Johtocafe", "ping": 300, "alue": "Suomi"},
      {"nimi": "Kekkosen softa Oy", "ping": 350, "alue": "Suomi"}
    ]

  });
