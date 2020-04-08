const itemControllers = require('./itemControllers');
const authController = require('./authController');
const verifyToken = require('./verifyToken');

const addItem = itemControllers.addItem;
const getItems = itemControllers.getItems;
const registerUser = authController.registerUser;
const getRegisteredUser = authController.getRegisteredUser;
const loginUser = authController.loginUser;

const path = require('path');

const routes = (app) => {
  app.route('/')
    .get((req, res) => {
      res.sendFile(path.join(__dirname + '/index.html'));
    });
  app.route('/verified')
    .get(verifyToken, (req, res) => {
      res.sendFile(path.join(__dirname + '/verified.html'))
    })
  app.route('/auth/register')
    .post(registerUser)
    .get(getRegisteredUser);
  app.route('/auth/login')
    .post(loginUser);
  app.route('/items')
    .post(addItem)
    .get(getItems);
};

module.exports = routes;
