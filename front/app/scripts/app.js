'use strict';

/**
 * @ngdoc overview
 * @name hackathonApp
 * @description
 * # hackathonApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angularCharts',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/tech', {
        templateUrl: 'views/technology.html',
        contoller: 'TechnologyCtrl'
      })
      .when('/moi', {
        templateUrl: 'views/moi.html',
        controller: 'MoiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
