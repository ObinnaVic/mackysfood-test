const express = require("express");
const { httpUploadCategories, httpGetParticularCategories} = require("./category.controller")

const CategoryRouter = express.Router();

CategoryRouter.route("/").get(httpGetParticularCategories).post(httpUploadCategories)

module.exports = CategoryRouter;