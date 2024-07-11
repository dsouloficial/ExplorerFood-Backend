/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      name: 'John Doe',
      email: 'user@email.com',
      password: '$2a$10$q2u7xgVso1sHzfe4mBdKeu495O17Z307AXgaA9Ou.fBPeBZhGQEBO',
      admin: false,
    },
    {
      name: 'Jane Doe',
      email: 'admin@email.com',
      password: '$2a$10$q2u7xgVso1sHzfe4mBdKeu495O17Z307AXgaA9Ou.fBPeBZhGQEBO',
      admin: true,
    },
  ]);
};

/**
 * use:
 *  $ npx knex seed:run
 * para executar as seeds knex no banco de dados.
 */
