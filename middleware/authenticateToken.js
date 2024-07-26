const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
