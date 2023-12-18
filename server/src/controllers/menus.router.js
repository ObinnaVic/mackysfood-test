const express = require("express");
const { httpUploadNewProducts, httpGetFoodData } = require("./menus.controller");

const MenuRouters = express.Router();

MenuRouters.route("/").get(httpGetFoodData).post(httpUploadNewProducts);


module.exports = MenuRouters;
