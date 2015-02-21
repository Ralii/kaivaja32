angular.module('SteroidsApplication', [
  'supersonic',
    'chart.js'
])
.controller('IndexController', function($scope, supersonic) {

  $scope.navbarTitle = "Welcome to Supersonic!";

        $scope.otsikko = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.sarja = ['Series A', 'Series B'];
        $scope.tieto = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
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
