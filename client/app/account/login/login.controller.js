'use strict';

class LoginController {
  constructor(Auth, $state) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        username: this.user.username,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$state.go('finder');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('friendinatorApp')
  .controller('LoginController', LoginController);
