'use strict';

angular.module('friendinatorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('yours', {
        url: '/yours',
        templateUrl: 'app/yours/yours.html',
        controller: 'YoursCtrl',
        controllerAs: 'vm',
        authenticate: 'user'
      });
  });
