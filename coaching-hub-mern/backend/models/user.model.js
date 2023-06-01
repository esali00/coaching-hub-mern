const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true
    },
    password: {
    type: String,
    required: true
    },
    notes: {
        type: Array
    },
  }, {collection: "coaching_hub", timestamps: true})
  
  module.exports = mongoose.model("User", userSchema);
  