const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  sku: String,
  name: String,
  cost: String,
  freight: String
});

mongoose.model('items', itemSchema);
