const path = require('path');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    debug: false,
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite3'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'seeds'),
    },
  },

  /*production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },*/
};
