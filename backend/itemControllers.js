const mongoose = require('mongoose');
const itemSchema = require('./itemModel');

const Item = mongoose.model('Item', itemSchema);

const addItem = (req, res) => {
  let newItem = new Item(req.body);
  newItem.save((err, Item) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Item);
    };
  });
};

const getItems = (req, res) => {
  Item.find({}, (err, Item) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Item);
    };
  });
};

module.exports.addItem = addItem;
module.exports.getItems = getItems;
