// do not make changes to this file
const knex = require('knex');
const knexConfig = require('../knexfile.cjs');
const environment = process.env.NODE_ENV || 'development';

module.exports = knex(knexConfig[environment]);