'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Find Friends',
    'state': 'finder'
  }, {
    'title': 'Your Friends',
    'state': 'yours'
  }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('friendinatorApp')
  .controller('NavbarController', NavbarController);
