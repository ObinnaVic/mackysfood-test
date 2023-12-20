const Category = require("./categories.mongo");

//function to upload all categories
async function uploadCategories(category) {
    try {
        const data = await Category.create(category);

        return data;
    } catch (error) {
        console.error(error);
    }
}

//Function to fetch particular categories from the database
async function getParticularCategories(category) {
    try {
        const data = await Category.find({
            category: {$regex: category, $options: "i"}
        })

        return data;
    } catch (error) {
        console.error("Could not find Category");
    }
}

//Function to get the details of a particular food that matches the id being passed
async function getParticularFood(foodID) {
    try {
        const data = Category.findOne({
            id: foodID
        })

        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploadCategories,
    getParticularCategories,
    getParticularFood
}