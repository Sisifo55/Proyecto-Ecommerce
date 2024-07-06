module.exports = {
    secretKey: process.env.JWT_SECRET || '4f02061e30995bbbb2553c33d11a89f1624ea122de02b9851bb14d86ceaaa228ed718daf630ef1cfe9a8258960d7ad1b94d5a443f80cd42559a02a29cc04a69'
  };
  module.exports = {
    development: {
      username: 'root',
      password: 'vadim20***14',
      database: 'goshop',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    test: {
      username: 'root',
      password: 'vadim20***14',
      database: 'goshop',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: 'root',
      password: 'vadim20***14',
      database: 'goshop',
      host: '127.0.0.1',
      dialect: 'mysql'
    }
  };