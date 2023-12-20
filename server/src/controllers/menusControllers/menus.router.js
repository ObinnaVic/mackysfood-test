const express = require("express");
const {
  httpUploadNewProducts,
  httpGetFoodData,
  httpGetParticularMenu
} = require("./menus.controller");

const MenuRouters = express.Router();

MenuRouters.route("/").get(httpGetFoodData).post(httpUploadNewProducts);
MenuRouters.route("/menu_category").get(httpGetParticularMenu);

module.exports = MenuRouters;
