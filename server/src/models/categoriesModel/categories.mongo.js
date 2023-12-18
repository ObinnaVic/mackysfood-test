const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 1,
  },
});

const categorySchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    },
  features: [featureSchema]
});


const Category = mongoose.model("category", categorySchema);

module.exports = Category;
