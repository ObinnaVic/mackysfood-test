const {
  uploadCategories,
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

module.exports = {
  httpUploadCategories,
};
