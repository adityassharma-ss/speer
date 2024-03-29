const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = decoded; 
    next();
  });
};
