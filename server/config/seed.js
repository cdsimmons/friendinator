/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      username: 'test',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      name: 'Test User',
      username: 'bla',
      email: 'bla@example.com',
      password: 'bla'
    }, {
      provider: 'local',
      name: 'Test User',
      username: 'raa',
      email: 'raa@example.com',
      password: 'raa'
    }, {
      provider: 'local',
      name: 'Test User',
      username: 'foo',
      email: 'foo@example.com',
      password: 'foo'
    }, {
      provider: 'local',
      name: 'Test User',
      username: 'bar',
      email: 'bar@example.com',
      password: 'bar'
    }, {
      provider: 'local',
      name: 'Test User',
      username: 'bob',
      email: 'bob@example.com',
      password: 'bob'
    }, {
      provider: 'local',
      name: 'Test Bob 2',
      username: 'bob2',
      email: 'bob@example.com',
      password: 'bob2'
    }, {
      provider: 'local',
      name: 'Test Bob 3',
      username: 'bob3',
      email: 'bob@example.com',
      password: 'bob3'
    },  {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
