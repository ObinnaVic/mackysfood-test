const mongoose = require("mongoose");

//The main menu schema
const MenuSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});



// const SubcategorySchema = new mongoose.Schema({
//   img: String,
//   name: String,
//   amount: Number,
//   features: [
//     {
//       size: String,
//       price: Number,
//       id: Number,
//       amount: Number,
//     },
//   ],
// });

// categories: [SubcategorySchema], // Array of SubcategorySchema items

// Create a Mongoose model based on the MenuSchema
const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
