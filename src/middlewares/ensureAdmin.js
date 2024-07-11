
const knex = require('../database/knex');
const { AppError } = require('../utils/AppError');

async function ensureAdmin(req, res, next) {

  const { id } = req.user;
  const user = await knex('users').where({ id }).first();

  if (user.admin) return next();

  throw new AppError('Usuário não é Administrador', 401);
}

module.exports = ensureAdmin;
