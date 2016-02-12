'use strict';

angular.module('friendinatorApp.auth', [
  'friendinatorApp.constants',
  'friendinatorApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
