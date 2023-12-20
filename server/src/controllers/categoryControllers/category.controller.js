const {
  uploadCategories,
  getParticularCategories,
  getParticularFood
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
    res.status(201).json(await getParticularCategories(category));

  } catch (error) {
    res.status(400).json({
      error: "Could not find Category"
    })
  }
}

async function getParticularFood(req, res) {
  try {
    
  } catch (error) {
    
  }
}

module.exports = {
  httpUploadCategories,
  httpGetParticularCategories
};
