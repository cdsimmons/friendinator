'use strict';

angular.module('friendinatorApp')
  .directive('friendsList', function () {
    return {
      templateUrl: 'components/friends-list/friends-list.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      	
      },
      controller: 'FriendsListCtrl',
      controllerAs: 'vm'
    };
  });
