var jwt = require('jsonwebtoken');
var config = require('./config');

const path = require('path');

// Create a function that will verify the JWT and if so
const verifyToken = (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (!token) {
    res.status(403).send('No token was provided.');
  } else {
    jwt.verify(token, config.secretKey, (error, decoded) => { // jwt.verify(token, secretOrPublicKey, [options, callback])
      if (error) {
        res.status(500).sendFile(path.join(__dirname + '/unverified.html'));
        // res.status(500).send('Failure to verify the token.');
      } else {
        req.userId = decoded.id;
        next();
      }
    })
  }
}

module.exports = verifyToken;
