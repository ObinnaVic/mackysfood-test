const Menu = require("./menus.mongo");


//upload a new menu(food) data
async function uploadFoodDataToDB(product) {
    try {
        const data = await Menu.create(
          product
        );

        return data;
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


//gets all the menu(food) data
async function getFoodData() {
    try {
        const data = Menu.find({}, {
            "_id": 0,
            "__v": 0
        });
        return data;
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}


//To get a particular menu from all menus
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