const Menu = require("./menus.mongo");



async function uploadFoodDataToDB(food) {
    const data = await Menu.findOneAndUpdate({
        name: food.name
    }, {
        food
    }, {
        upsert: true
    });

    return data;
}


module.exports = {
    uploadFoodDataToDB
}