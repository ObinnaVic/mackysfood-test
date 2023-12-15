const mongoose = require("mongoose");

// Define a schema for the subcategory items (e.g., Cookies or Biscuites)
const SubcategorySchema = new mongoose.Schema({
  img: String,
  name: String,
  amount: Number,
  features: [
    {
      size: String,
      price: Number,
      id: Number,
      amount: Number,
    },
  ],
});

// Define the main menu schema
const MenuSchema = new mongoose.Schema({
  img: String,
  name: String,
  price: Number,
  amount: Number,
  id: Number,
  button: Boolean,
  category: String,
  categories: [SubcategorySchema], // Array of SubcategorySchema items
});

// Create a Mongoose model based on the MenuSchema
const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
