const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post',
  }],
  dp:{
    type: String,  // assuming the profile picture is stored as a URL or file path
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true
  },
});

UserSchema.plugin(plm);

module.exports = mongoose.model('User', UserSchema);
