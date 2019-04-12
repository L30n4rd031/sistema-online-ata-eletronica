const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  userType: {
    type: Array,
    require: true
  },
  createdAt: {
    type: Date,
    defaul: Date.now
  }

});

mongoose.model('User', UserSchema);
