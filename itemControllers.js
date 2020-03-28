import mongoose from 'mongoose';
import { itemSchema } from './itemModel';

const Item = mongoose.model('Item', itemSchema);

export const addItem = (req, res) => {
  let newItem = new Item(req.body);

  newItem.save((err, Item) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Item);
    };
  });
};

export const getItems = (req, res) => {
  Item.find({}, (err, Item) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Item);
    };
  });
};
