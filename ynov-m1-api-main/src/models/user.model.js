const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isOwner: {
    type: Boolean,
    default: false,
  },
  typeUser: {
    type: [String],
    enum: ['customer', 'owner'],
    default: ['customer'],
    //comme ça, un user pourrait potentiellement avoir plusieurs valeurs par défaut, et potentiellement plusieurs type, puisqu'il peut etre propriétaire et locataire en meme temps
  },

  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
