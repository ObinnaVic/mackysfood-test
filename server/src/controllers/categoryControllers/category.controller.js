const {
  uploadCategories,
  getParticularCategories,
  getParticularFood,
  updateParticularFood,
  deleteParticularFood
} = require("../../models/categoriesModel/categories.model");



async function httpUploadCategories(req, res) {
  try {
    const data = req.body;

    if (!data) {
      res.status(400).json({
        error: "No data passed",
      });

      return;
    }

    res.status(201).json(await uploadCategories(data));
  } catch (error) {
    res.status(400).json({
      error: "Error while uploading Categories"
    });
  }
}

async function httpGetParticularCategories(req, res) {
  try {
    const { category } = req.query;

    if (!category) {
      res.status(400).json({
        error: "Could not access passed query",
      });

      return;
    }

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

    if (!foodID) {

      res.status(400).json({
        error: "Could not access passed Id",
      });

      return;
    }

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

    if (!data) {
      
      res.status(400).json({
        error: "No data passed"
      })

      return;

    }

    res.status(201).json(await updateParticularFood(data))
  } catch (error) {
    res.status(400).json({
      error: "Could not perform updates"
    })
  }
}

async function httpDeleteParticularFood(req, res) {
  try {
    const { id: foodID } = req.params;
    
    if (!foodID) {
      res.status(400).json({
        error: "Could not access Id"
      })
    }

    res.status(200).json(await deleteParticularFood(foodID))
  } catch (error) {
    res.status(400).json({
      error: "Delete Operation Failed"
    })
  }
}

module.exports = {
  httpUploadCategories,
  httpGetParticularCategories,
  httpGetParticularFood,
  httpUpdateParticularFood,
  httpDeleteParticularFood
};
