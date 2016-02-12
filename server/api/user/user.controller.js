'use strict';

import User from './user.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    res.status(statusCode).json(err);
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export function index(req, res) {
  User.findAsync({}, '-salt -password')
    .then(users => {
      res.status(200).json(users);
    })
    .catch(handleError(res));
}

/**
 * Search users by username
 * restriction: authenticated
 */
export function search(req, res, next) {
  var username = req.query.username;
  var regexp = new RegExp("^"+ username);

  User.findAsync({ username: regexp }, '-salt -password -email')
    .then(users => {
      if (!users) {
        return res.status(404).end();
      }
      res.status(200).json(users);
    })
    .catch(err => next(err));
}

/**
 * Creates a new user
 */
export function create(req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.saveAsync()
    .spread(function(user) {
      var token = jwt.sign({ _id: user._id }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      res.json({ token });
    })
    .catch(validationError(res));
}

/**
 * Get a single user
 */
export function show(req, res, next) {
  var userId = req.params.id;

  User.findByIdAsync(userId)
    .then(user => {
      if (!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(err => next(err));
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export function destroy(req, res) {
  User.findByIdAndRemoveAsync(req.params.id)
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}

/**
 * Get friends for a user
 */
export function friends(req, res, next) {
  var userId = req.params.id;
  var userFriends = [];
  var people = [];

  User.findByIdAsync(userId)
    .then(user => {
      if (!user) {
        return res.status(404).end();
      }

      userFriends = user.friends;

      User.find({'_id': { $in: userFriends}}, '-salt -password -email')
        .then(people => {
          res.json(people);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
}

/**
 * Update... 
 */
export function update(req, res, next) {
  var userId = req.user._id;
  var updates = req.body;
  var temp = {};

  // Explicitly defining what will be updated, otherwise API could be abused
  if(updates.username) {
    temp.username = String(updates.username);
  }
  if(updates.name) {
    temp.name = String(updates.name);
  }
  if(updates.email) {
    temp.email = String(updates.email);
  }
  if(updates.friends) {
    temp.friends = updates.friends;
  }

  User.update(
      {_id: userId}, 
      {$set: temp}
    )
    .then(user => {
      res.status(204).end();
    });
}

/**
 * Change a users password
 */
export function changePassword(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findByIdAsync(userId)
    .then(user => {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        return user.saveAsync()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
}

/**
 * Get my info
 */
export function me(req, res, next) {
  var userId = req.user._id;
  console.log(userId);

  User.findOneAsync({ _id: userId }, '-salt -password')
    .then(user => { // don't ever give out the password or salt
      console.log(user);
      if (!user) {
        return res.status(401).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

/**
 * Authentication callback
 */
export function authCallback(req, res, next) {
  res.redirect('/');
}
