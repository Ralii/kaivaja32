'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('MapCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $http.get('https://kaivuri32.herokuapp.com/charts')
      .success(function(data,status,header,config){
        $scope.hai = data;
        for(var i ; i < data.count ; i++){
          if(data.max < 100) {
            $scope.hundr.push(data[i]);
          } else if (data.min == 100) {
            $scope.hundrfif = data[i];
          } else if (data.min == 150) {
            $scope.twohundr = data[i];
          } else if(data.min == 200) {
            $scope.twofifty = data[i];
          } else if(data.min == 250){
            $scope.treehundr = data[i];
          } else if(data.min == 300) {
            $scope.threeplus = data[i];
          }
        }
      })
      .error(function(data,status,header,config){
      alert(status);
      });

    $scope.otsikko = ["0-50", "50-100", "100-150", "150-200", "200-250", "250-300", "300+"];
    $scope.sarja = ['Ping'];
    $scope.tieto = [
      [$scope.hundr.count, $scope.hundrfif.count, $scope.twohundr.count, $scope.twofifty.count, $scope.treehundr.count, $scope.threeplus.count]
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
