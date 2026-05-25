const mongoose = require("mongoose");

const foodschema = new mongoose.Schema({
  foodname: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  expirytime: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("food", foodschema);