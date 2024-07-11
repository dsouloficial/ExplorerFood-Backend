/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('dish_categories').del()
  await knex('dish_categories').insert([
    { name: 'Sobremesas' },
    { name: 'Refeições' },
    { name: 'Bebidas' }
  ]);
};
