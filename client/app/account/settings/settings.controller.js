'use strict';

class SettingsController {
  constructor(Auth, User) {
    this.user = Auth.getCurrentUser();
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
  }

  update(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.update(this.user)
        .then(() => {
          this.message = 'Details successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
    } else {
      this.message = 'Error in form.';
    }
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('friendinatorApp')
  .controller('SettingsController', SettingsController);
