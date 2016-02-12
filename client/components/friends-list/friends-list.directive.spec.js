'use strict';

describe('Directive: friendsList', function () {

  // load the directive's module and view
  beforeEach(module('friendinatorApp'));
  beforeEach(module('components/friends-list/friends-list.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));


});
