const express = require("express");
const path = require("path");
const MenuRouters = require("./controllers/menus.router");


const app = express();


//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/api/menus", MenuRouters);


app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})



module.exports = app;