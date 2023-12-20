const express = require("express");
const { httpUploadCategories, httpGetParticularCategories, httpGetParticularFood, httpUpdateParticularFood, httpDeleteParticularFood} = require("./category.controller")

const CategoryRouter = express.Router();

CategoryRouter.route("/")
  .get(httpGetParticularCategories)
  .post(httpUploadCategories)
  .put(httpUpdateParticularFood);
CategoryRouter.route("/:id").get(httpGetParticularFood).delete(httpDeleteParticularFood);

module.exports = CategoryRouter;