const knex = require('../database/knex');
const { AppError } = require('../utils/AppError');

class FavoritesController {

  async index(request, response) {
    const { id: user_id } = request.user;

    const favorites = await knex('favorites_dishes as f')
      .join('dishes as d', 'd.id', 'f.dish_id')
      .select('f.dish_id as id', 'd.name', 'd.picture')
      .where('f.user_id', user_id)
      .orderBy('id');

    return response.json(favorites);
  }

  async create(request, response) {
    const { id: dish_id } = request.params;
    const { id: user_id } = request.user;

    if (isNaN(dish_id)) throw new AppError('Informe o id do prato!');

    const favoriteExists = await knex('favorites_dishes').where({ dish_id, user_id }).first();
    if (favoriteExists) throw new AppError('Prato já foi favoritado!');

    const dish = await knex('dishes').select('name').where({ id: dish_id }).first();

    if (!dish) throw new AppError('Prato inexistente!');

    const [ favorited ] = await knex('favorites_dishes').insert({ dish_id, user_id });

    if (favorited)
      return response.status(201).end();

    throw new AppError('Erro ao registrar favorito!');
  }

  async delete(request, response) {
    const { id: dish_id } = request.params;
    const { id: user_id } = request.user;

    if (isNaN(dish_id)) throw new AppError('Informe o id do prato!');

    const hasDeleted = await knex('favorites_dishes').where({ dish_id, user_id }).delete();

    if (hasDeleted)
      return response.status(200).end();

    throw new AppError('ID do prato não é favorito!');
  }
}

module.exports = FavoritesController;
