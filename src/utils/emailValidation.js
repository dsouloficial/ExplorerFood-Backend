/**
 * Validação simples de e-mail por Regex
 * @param {String} email texto contendo email para testar.
 * @returns Boolean
 */
const isEmailValid = email => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

module.exports = { isEmailValid };
