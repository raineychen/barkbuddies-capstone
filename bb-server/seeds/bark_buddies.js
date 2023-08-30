const userData = require('../seed-data/user');
const petData = require('../seed-data/pet');
const connectionData = require('../seed-data/connections');
const messageData = require('../seed-data/messages');

exports.seed = function (knex) {
  // Delete data from tables
  return knex('message').del()
    .then(function () {
      return knex('connection').del();
    })
    .then(function () {
      return knex('pet').del();
    })
    .then(function () {
      return knex('user').del();
    })
    // Insert data into tables
    .then(function () {
      return knex('user').insert(userData);
    })
    .then(function () {
      return knex('pet').insert(petData);
    })
    .then(function () {
      return knex('connection').insert(connectionData);
    })
    .then(function () {
      return knex('message').insert(messageData);
    });
};





