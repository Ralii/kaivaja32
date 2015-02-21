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
    'chart.js',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
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
      .when('/widgets', {
        templateUrl: 'views/widgets.html',
        controller: 'WidgetsCtrl'
      })
      .when('/wmap', {
        templateUrl: 'views/wmap.html',
        controller: 'WmapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
