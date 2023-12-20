const {
  uploadFoodDataToDB,
  getFoodData,
  getParticularMenu
} = require("../../models/menusModels/menus.model");

async function httpUploadNewProducts(req, res) {
  res.status(201).json(await uploadFoodDataToDB(req.body));
}

async function httpGetFoodData(req, res) {
  try {
    res.status(200).json(await getFoodData());
  } catch (error) {

    res.status(404).json({
      error: "Menu not found"
    })
    
  }
}

async function httpGetParticularMenu(req, res) {
  const { category } = req.query;
  res.status(200).json(await getParticularMenu(category))
}

module.exports = {
  httpUploadNewProducts,
  httpGetFoodData,
  httpGetParticularMenu
};
