const express = require("express");
const { httpUploadCategories, httpGetParticularCategories, httpGetParticularFood, httpUpdateParticularFood} = require("./category.controller")

const CategoryRouter = express.Router();

CategoryRouter.route("/")
  .get(httpGetParticularCategories)
  .post(httpUploadCategories)
  .put(httpUpdateParticularFood);
CategoryRouter.route("/:id").get(httpGetParticularFood);

module.exports = CategoryRouter;