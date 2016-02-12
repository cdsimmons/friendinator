'use strict';

(function() {

class FriendsListCtrl {

	constructor($attrs, Auth) {
		this.Auth = Auth;
		this.user = Auth.getCurrentUser();
		this.searchable = ($attrs.searchable === 'true');
		this.showCurrent = ($attrs.showCurrent === 'true');
		this.username = null;
		this.people = null;
		this.feedback = null;

		if(this.showCurrent) {
			// Populate with current friends...
			// Build GET friends API... this will return a list of people for current user...
			this.Auth.getFriends(this.user)
				.then(people => {
					if(!people.length) {
						this.feedback = 'You have no friends, go find some!';
						return;
					}
					this.people = people;
				})
				.catch(() => {
					this.feedback = 'Something went wrong. Please try again later.';
				});
		}
	}

	find() {
		this.feedback = null;
		this.people = [];

		if(!this.username) {
			this.feedback = 'Please enter a username.';
			return;
		}

		this.Auth.search(this.username)
			.then(people => {
				if(!people.length) {
					this.feedback = 'Nobody found with that username :(';
					return;
				}
				this.people = people;
			})
			.catch(() => {
				this.feedback = 'Something went wrong. Please try again later.';
			});
	}

	addFriend(id) {
		var friends = this.user.friends;

		// Add
		friends.push(id);

		// Update...
    this.Auth.update(this.user)
      .then(() => {
      })
      .catch(() => {
        
      });
	}

	removeFriend(id) {
		var friends = this.user.friends;
		var index = this.user.friends.indexOf(id);

		// Remove
		friends.splice(index, 1);

    this.Auth.update(this.user)
      .then(() => {
      })
      .catch(() => {
        
      });
	}
}

angular.module('friendinatorApp')
	.controller('FriendsListCtrl', FriendsListCtrl);

})();