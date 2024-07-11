const { verify } = require('jsonwebtoken');
const { jwt } = require('../configs/auth');
const { AppError } = require('../utils/AppError');

function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError('JWT token não informado', 401);

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, jwt.secret);
    req.user = { id: Number(user_id) };
    return next();
  } catch {
    throw new AppError('Token JWT inválido', 401);
  }

  next();
}

module.exports = ensureAuthenticated;
