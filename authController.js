const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config');
const mongoose = require('mongoose');
const userSchema = require('./userModel');

// Create a model instance called 'User' of the userSchema
const User = mongoose.model('User', userSchema);

// Create the function that will be called by a POST call to the /register endpoint
const registerUser = (req, res) => {
// Use bcrypt to create a hash of the password
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
// Create a user with the User model
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  newUser.save((error, User) => {
// Create a JSON web token
    var token = jwt.sign({ id: User._id }, config.secretKey, { // jwt.sign(payload, secretOrPrivateKey, [options, callback])
      expiresIn: 86400 // expires in 24 hours
    });
    if (error) {
      res.status(500).send(error);
    } else {
      console.log(jwt.decode(token, {complete: true}));
      res.status(200).send({auth: true, token: token});
    };
  });
};
// Create the function that will be called by a GET call to the /register endpoint
const getRegisteredUser = (req, res) => {
// Get token from the headers in the request
  var token = req.token;
  var decoded = req.decoded;
  if(!token){
    res.status(401).send({auth: false, message: 'Token not provided.'});
  } else {
    User.findById(decoded.id, {password: 0}, (error, User) => { // Model.findById(id, projection, [options, callback])
      if (error) {
        res.status(500).send('There was an error finding that user.');
      } else if (!User) {
        res.status(404).send('Could not locate that user.');
      } else {
        res.status(200).send(User);
      };
    });
  };
};
// Create the function that will be called by a GET call to the /register endpoint
const loginUser = (req, res) => {
  User.findOne({email: req.body.email}, (error, User) => { // Model.findOne([condition], [callback])
    if (error) {
      res.status(500).send('There was an error with login.');
    } else if (!User) {
      res.status(404).send('Sorry, that user does not appear to exist.');
    } else {
      var passwordIsValid = bcrypt.compareSync(req.body.password, User.password); // compareSync(data to compare, data to be compared to)
      if (!passwordIsValid) {
        res.status(401).send({auth: false, token: null});
      } else {
        var token = jwt.sign({id: User._id}, config.secretKey, {
          expiresIn: 86400
        })
        res.status(200).send({auth: true, token: token});
      };
    }
  });
};

module.exports.registerUser = registerUser;
module.exports.getRegisteredUser = getRegisteredUser;
module.exports.loginUser = loginUser;
