const Menu = require("./menus.mongo");


//upload a new menu(food) data: POST "/api/menus"
async function uploadFoodDataToDB(product) {
    try {
        const data = await Menu.create(
          product
        );

        return data;
    } catch (error) {
        res.status(500).json({
            error: "Could not upload food Data"
        })
    }
}


//gets all the menu(food) data: GET "/api/menus"
async function getFoodData() {
    try {
        const data = await Menu.find({}, {
            "_id": 0,
            "__v": 0
        });
        return data;
    } catch (error) {
        res.status(400).json({
            error: "Food Data not found"
        })
    }
}


//To get a particular menu from all menus: GET "/api/menus/menu_category?category=launch"
async function getParticularMenu(category) {
    try {
        const data = await Menu.find({
          category: { $regex: category, $options: "i" },
        });

        return data;
    } catch (error) {
        res.status(201).json({
            error: "Could not find menu"
        })
    }
}


module.exports = {
    uploadFoodDataToDB,
    getFoodData,
    getParticularMenu
}