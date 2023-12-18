const Category = require("./categories.mongo");

async function uploadCategories(category) {
    try {
        const data = await Category.create(category);

        return data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    uploadCategories
}