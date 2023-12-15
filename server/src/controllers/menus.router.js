const express = require("express");
const { httpUploadNewProducts } = require("./menus.controller");

const MenuRouters = express.Router();

MenuRouters.route("/").get(httpUploadNewProducts);


module.exports = MenuRouters;
