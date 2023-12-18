const express = require("express");
const path = require("path");
const MenuRouters = require("./controllers/menusControllers/menus.router");
const CategoryRouter = require("./controllers/categoryControllers/category.router");

const app = express();

//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/api/menus", MenuRouters);
app.use("/api/categories", CategoryRouter)

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
