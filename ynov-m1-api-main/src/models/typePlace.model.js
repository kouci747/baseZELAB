const mongoose = require('mongoose');

const typePlaceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
});

module.exports = mongoose.model('TypePlace', typePlaceSchema);
