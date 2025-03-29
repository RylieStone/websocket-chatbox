// do not make changes to this file
const knex = require('knex');
const path = require('path')
const knexConfig = require('../knexfile.cjs');
const environment = process.env.NODE_ENV || 'development';

if (knexConfig[environment].connection.filename) {
    knexConfig[environment].connection.filename = path.join(__dirname, '..', knexConfig[environment].connection.filename);
}

module.exports = knex(knexConfig[environment]);