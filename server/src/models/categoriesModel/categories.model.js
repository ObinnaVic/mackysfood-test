const Category = require("./categories.mongo");

async function uploadCategories(category) {
    try {
        const data = await Category.create(category);

        return data;
    } catch (error) {
        console.error(error);
    }
}

//TODO: CREATE THE END POINT ANF FUNCTIONS TO HANDLE FETCHING A PARTICULAR CATEGORY FROM ALL CATEGORIES

module.exports = {
    uploadCategories
}