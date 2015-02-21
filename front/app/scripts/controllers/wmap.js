'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('WmapCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = { center: { latitude: 50, longitude: -20 }, zoom: 3};

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
    ];

    $scope.circles = [
      {
        id: 1,
        center: {
          latitude: 44,
          longitude: -108
        },
        radius: 2000000,
        stroke: {
          color: '#52A8F2',
          weight: 2,
          opacity: 1
        },
        fill: {
          color: '#52A8F2',
          opacity: 0.5
        },
        geodesic: true, // optional: defaults to false
        visible: true, // optional: defaults to true
        control: {}
      }
      ];

  });
