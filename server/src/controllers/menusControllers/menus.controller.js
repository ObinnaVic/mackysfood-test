const {
  uploadMenuToDB,
  getAllMenu,
  getParticularMenu
} = require("../../models/menusModels/menus.model");

async function httpUploadNewMenu(req, res) {
  res.status(201).json(await uploadMenuToDB(req.body));
}

async function httpGetAllMenu(req, res) {
  try {
    res.status(200).json(await getAllMenu());
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
  httpUploadNewMenu,
  httpGetAllMenu,
  httpGetParticularMenu
};
