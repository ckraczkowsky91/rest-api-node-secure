import mongoose from "mongoose";

const schema = mongoose.Schema;

export const itemSchema = new schema({
  name: {
    type: String,
    required: true
  }
});
