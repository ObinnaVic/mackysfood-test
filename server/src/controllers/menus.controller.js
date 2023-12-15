const {uploadFoodDataToDB} = require("../models/menusModels/menus.model")

async function httpUploadNewProducts(req, res) {
    res.status(200).json(await uploadFoodDataToDB());
}


module.exports = {
    httpUploadNewProducts
}