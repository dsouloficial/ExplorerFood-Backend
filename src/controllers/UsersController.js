const knex = require('../database/knex');
const { hash, genSalt, compare } = require('bcryptjs');

const { AppError } = require('../utils/AppError');
const { isEmailValid } = require('../utils/emailValidation');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password)
      throw new AppError('name, email e password são obrigatórios', 401);

    if (!isEmailValid(email)) throw new AppError('E-mail inválido!', 401);

    if (password.length < 6) throw new AppError('Senha muito curta! Informe pelo menos 6 caracteres.', 401);

    const userExists = await knex('users').select('email').where({ email }).first();
    if (userExists) throw new AppError('E-mail já cadastrado!', 401);

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const [newUser] = await knex('users').insert({ name, email, password: hashedPassword });

    return response.status(201).json({ id: newUser });
  }

  async update(request, response) {
    const { name, email, password, newPassword } = request.body;
    const { id } = request.user;

    const user = await knex('users').where({ id }).first();
    if (!user) throw new AppError('Usuário não encontrado!', 404);

    const userNewData = {};

    if (name) userNewData.name = name;

    if (email) {
      if (!isEmailValid(email)) throw new AppError('E-mail inválido!');

      const emailAlreadyExists = await knex('users')
        .select(['id', 'email'])
        .where({ email })
        .first();

      if (emailAlreadyExists && emailAlreadyExists.id !== user.id)
        throw new AppError('E-mail já em uso!');

      userNewData.email = email;
    }

    if (newPassword) {
      if (!password) throw new AppError('Informe a senha atual para cadastrar uma nova!', 404);

      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) throw new AppError('Senha incorreta!', 401);

      const salt = await genSalt(10);
      const hashedPassword = await hash(newPassword, salt);

      userNewData.password = hashedPassword;
    }

    const updated = await knex('users')
      .where({ id })
      .update({ ...userNewData });

    if (!updated) throw new AppError('Ocorreu uma falha ao atualizar!');

    return response.json();
  }
}

module.exports = UsersController;
