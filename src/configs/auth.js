module.exports = {
  jwt: {
    secret: process.env.AUTH_SECRET || 'default_secret',
    expiresIn: '1d',
  },
};
