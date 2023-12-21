const express = require("express");
const {
  httpUploadNewMenu,
  httpGetAllMenu,
  httpGetParticularMenu,
  httpUploadOrUpdateMenu,
} = require("./menus.controller");

const MenuRouters = express.Router();

MenuRouters.route("/").get(httpGetAllMenu).post(httpUploadNewMenu);
MenuRouters.route("/add").post(httpUploadOrUpdateMenu);
MenuRouters.route("/menu_category").get(httpGetParticularMenu);

module.exports = MenuRouters;
