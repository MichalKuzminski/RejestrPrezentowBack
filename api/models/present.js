const mongoose = require('mongoose');

const presentSchema = mongoose.Schema({
  name: String,
  receiver: String,
  price: Number,
  link: String,
  description: String,
});

module.exports = mongoose.model('Present', presentSchema);
