module.exports = {
    secretKey: process.env.JWT_SECRET || 'key'
  };
  module.exports = {
    development: {
      username: 'root',
      password: 'pas',
      database: 'goshop',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    test: {
      username: 'root',
      password: 'pas',
      database: 'goshop',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: 'root',
      password: 'pas',
      database: 'goshop',
      host: '127.0.0.1',
      dialect: 'mysql'
    }
  };
