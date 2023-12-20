const {
  uploadCategories,
  getParticularCategories,
  getParticularFood,
  updateParticularFood
} = require("../../models/categoriesModel/categories.model");



async function httpUploadCategories(req, res) {
  try {
    const data = req.body;

    res.status(201).json(await uploadCategories(data));
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
}

async function httpGetParticularCategories(req, res) {
  try {
    const { category } = req.query;
    res.status(200).json(await getParticularCategories(category));

  } catch (error) {
    res.status(404).json({
      error: "Could not find Category"
    })
  }
}

async function httpGetParticularFood(req, res) {
  try {
    const { id: foodID } = req.params;
    res.status(200).json(await getParticularFood(foodID));
  } catch (error) {
    res.status(404).json({
      error: "Food not found"
    })
  }
}

async function httpUpdateParticularFood(req, res) {
  try {
    const data = req.body;
    res.status(201).json(await updateParticularFood(data))
  } catch (error) {
    res.status(400).json({
      error: "Could not perform updates"
    })
  }
}

module.exports = {
  httpUploadCategories,
  httpGetParticularCategories,
  httpGetParticularFood,
  httpUpdateParticularFood
};
