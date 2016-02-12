'use strict';

(function() {

function UserResource($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller: 'password'
      }
    },
    getFriends: {
      isArray: true,
      method: 'GET',
      params: {
        controller: 'friends'
      }
    },
    update: {
      method: 'PUT',
      params: {
      }
    },
    search: {
      isArray: true,
      method: 'GET',
      params: {
        controller: 'search'
      }
    },
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    }
  });
}

angular.module('friendinatorApp.auth')
  .factory('User', UserResource);

})();
