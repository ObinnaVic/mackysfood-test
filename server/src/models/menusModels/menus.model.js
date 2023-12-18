const Menu = require("./menus.mongo");



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

async function getFoodData() {
    try {
        const data = Menu.find({});
        return data;
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}


module.exports = {
    uploadFoodDataToDB,
    getFoodData
}