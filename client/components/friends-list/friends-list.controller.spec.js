'use strict';

describe('Controller: FriendsListCtrl', function () {

  // load the controller's module
  beforeEach(module('friendinatorApp'));

  var FriendsListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FriendsListCtrl = $controller('FriendsListCtrl', {
      $scope: scope
    });
  }));

});
