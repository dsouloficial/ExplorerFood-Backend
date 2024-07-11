const knex = require('../database/knex');
const { AppError } = require('../utils/AppError');

class DishesController {
  async create(request, response) {
    const { name, description, price, category_id, ingredients } = request.body;

    const newDish = { name, description, price, category_id: Number(category_id) };

    const [ dishId ] = await knex('dishes').insert(newDish);

    const ingredientList = ingredients.map((item) => ({ dish_id: dishId, name: item }));

    if (ingredientList.length > 0) await knex('dish_ingredients').insert(ingredientList);

    return response.status(201).json({ id: dishId });
  }

  async remove(request, response) {
    const { id } = request.params;

    const hasDeleted = await knex('dishes').where({ id }).delete();

    if (hasDeleted) return response.status(200).end();

    throw new AppError('Prato não encontrado.', 404);
  }

  async update(request, response) {
    const { name, description, price, category_id, ingredients } = request.body;
    const { id } = request.params;

    const dish = await knex('dishes').where({ id }).first();
    if (!dish) throw new AppError('Prato não encontrado', 404);

    const updates = {};

    if (name) {
      updates.name = name;
    }
    if (description) {
      updates.description = description;
    }
    if (price !== undefined) {
      updates.price = Number(price);
    }
    if (category_id !== 'undefined') {
      updates.category_id = Number(category_id);
    }

    try {
      await knex('dishes').update(updates).where({ id });

      await knex('dish_ingredients').where({ dish_id: id }).delete();

      const hasIngredients = ingredients?.length > 0;
      if (hasIngredients) {
        const ingredientList = ingredients.map(item => ({ dish_id: id, name: item }));
        await knex('dish_ingredients').insert(ingredientList);
      }
    } catch (error) {
      console.log(error);
      throw new AppError('Erro interno do servidor!', 500);
    }

    return response.status(204).end();
  }

  async show(request, response) {
    const { id } = request.params;

    if (isNaN(id)) throw new AppError('Código do prato inválido!', 400);

    const dish = await knex('dishes as d')
      .join('dish_categories as c', 'c.id', 'd.category_id')
      .select('d.id', 'd.name', 'd.description', 'd.price', 'd.picture', 'c.id as category_id', 'c.name as category')
      .where('d.id', id)
      .first();

    if (!dish) throw new AppError('Prato não localizado!', 404);

    const ingredientsList = await knex('dish_ingredients').select('name').where({ dish_id: id });
    const ingredients = ingredientsList.map((item) => item.name);

    return response.json({ ...dish, ingredients });
  }

  async index(request, response) {

    const { id: user_id } = request.user;
    const { search } = request.query;

    const query = (typeof search === 'string' && search === 'undefined') ? null : search;

    const favorites = await knex('favorites_dishes')
      .select('dish_id')
      .where({ user_id });
    const favoritesIDs = favorites.map((favorite) => favorite.dish_id);

    let dishList;

    if (query) {
      const ingredients = await knex('dish_ingredients')
        .select('dish_id')
        .whereLike('name', `%${query}%`)
        .groupBy('dish_id');

      const dishesByIngredient = ingredients.map((i) => i.dish_id);

      dishList = await knex('dishes as d')
        .join('dish_categories as c', 'c.id', 'd.category_id')
        .select(
          'd.id',
          'd.name',
          'd.description',
          'd.price',
          'd.picture',
          'c.id as categoryId',
          'c.name as category')
        .whereLike('d.name', `%${query}%`)
        .orWhereIn('d.id', dishesByIngredient)
        .groupBy('d.id')
        .orderBy('category');
    } else {
      dishList = await knex('dishes as d')
        .join('dish_categories as c', 'c.id', 'd.category_id')
        .select(
          'd.id',
          'd.name',
          'd.description',
          'd.price',
          'd.picture',
          'c.id as categoryId',
          'c.name as category')
        .orderBy('category');
    }

    const userDishList = dishList.map((dish) => {
      let dishData = {};

      if (favoritesIDs.includes(dish.id)) {
        dishData = Object.assign({}, dish, { isFavorite: true });
      } else {
        dishData = Object.assign({}, dish, { isFavorite: false });
      }

      return dishData;
    });

    return response.json(userDishList);
  }
}

module.exports = DishesController;
