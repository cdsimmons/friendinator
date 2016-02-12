'use strict';

angular.module('friendinatorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('finder', {
        url: '/',
        templateUrl: 'app/finder/finder.html',
        controller: 'FinderCtrl',
        controllerAs: 'vm',
        authenticate: 'user'
      });
  });
