const Category = require("./categories.mongo");

//function to upload all categories: POST "/api/categories"
async function uploadCategories(category) {
    try {
        const data = await Category.create(category);

        return data;
    } catch (error) {
        console.error(error);
    }
}

//Function to fetch particular categories from the database: GET "api/categories?category=snacks"
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

//Function to get the details of a particular food that matches the id being passed: GET "/api/categories/id"
async function getParticularFood(foodID) {
    try {
        const data = await Category.findOne({
            _id: foodID
        })

        return data;
    } catch (error) {
        console.log(error);
    }
}

//Function to update a particular food 
async function updateParticularFood(foodData) {
    try {
        const { name } = foodData;
        const data = await Category.findOneAndUpdate({
            name: {$regex: name, $options: "i"}
        }, {
            foodData
        }, {
            upsert: true
        })

        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploadCategories,
    getParticularCategories,
    getParticularFood,
    updateParticularFood
}