const config = require('../../../knexfile');
const knex = require('knex');

const knexConnection = knex(config.development);

module.exports = knexConnection;
