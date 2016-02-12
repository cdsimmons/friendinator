'use strict';

angular.module('friendinatorApp', [
  'friendinatorApp.auth',
  'friendinatorApp.admin',
  'friendinatorApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
