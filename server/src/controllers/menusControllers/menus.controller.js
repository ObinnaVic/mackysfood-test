const {
  uploadFoodDataToDB,
  getFoodData,
} = require("../../models/menusModels/menus.model");

async function httpUploadNewProducts(req, res) {
  res.status(200).json(await uploadFoodDataToDB(req.body));
}

async function httpGetFoodData(req, res) {
  res.status(201).json(await getFoodData());
}

module.exports = {
  httpUploadNewProducts,
  httpGetFoodData,
};
