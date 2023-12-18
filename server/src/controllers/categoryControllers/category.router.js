const express = require("express");
const { httpUploadCategories} = require("./category.controller")

const CategoryRouter = express.Router();

CategoryRouter.route("/").post(httpUploadCategories)

module.exports = CategoryRouter;