/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable('dish_ingredients', table => {
    table.increments('id');
    table.integer('dish_id').notNullable().references('id').inTable('dishes').onDelete('CASCADE');
    table.text('name').notNullable();
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('dish_ingredients');
