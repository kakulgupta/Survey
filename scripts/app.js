angular.module('surveyApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/thanks', {
      templateUrl: 'views/thanks.html'
    })
    .when('/', {
      templateUrl: 'views/survey.html',
      controller: 'mainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
