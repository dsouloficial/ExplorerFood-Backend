/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable('dishes', table => {
    table.increments('id');
    table.text('name').notNullable();
    table.text('description');
    table.double('price', 2);
    table.text('picture');
    table.integer('category_id').references('id').inTable('dish_categories').onDelete("CASCADE");
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('dishes');
