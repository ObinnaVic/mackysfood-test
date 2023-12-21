const {
  uploadMenuToDB,
  getAllMenu,
  getParticularMenu,
  uploadOrUpdateAMenu
} = require("../../models/menusModels/menus.model");


//Get Menu Functionalities
async function httpGetAllMenu(req, res) {
  try {
    res.status(200).json(await getAllMenu());
  } catch (error) {
    res.status(404).json({
      error: "Menu not found",
    });
  }
}

async function httpGetParticularMenu(req, res) {
  const { category } = req.query;
  res.status(200).json(await getParticularMenu(category));
}


//Post Menu Functionalities
async function httpUploadNewMenu(req, res) {
  res.status(201).json(await uploadMenuToDB(req.body));
}

async function httpUploadOrUpdateMenu(req, res) {
  try {
    const menu = req.body;
    if (menu) {
      res.status(201).json(await uploadOrUpdateAMenu(menu))
    }

    res.status(400).json({
      error: "Could not access inputted menu"
    })
  } catch (error) {
    res.status(400).json({
      error: "Could not update or upload menu"
    })
  }
}

module.exports = {
  httpUploadNewMenu,
  httpGetAllMenu,
  httpGetParticularMenu,
  httpUploadOrUpdateMenu
};
