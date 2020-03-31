const controllers = require('./itemControllers');

const addItem = controllers.addItem;
const getItems = controllers.getItems;

const path = require('path');

const routes = (app) => {
  app.route('/')
    .get((req, res) => {
      res.sendFile(path.join(__dirname + '/index.html'));
    });
  app.route('/items')
    .post(addItem)
    .get(getItems);
};

module.exports = routes;
