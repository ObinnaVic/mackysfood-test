const Menu = require("./menus.mongo");
const Category = require("../categoriesModel/categories.mongo");

//upload a new menu(food) data: POST "/api/menus"
async function uploadMenuToDB(product) {
  try {
    const data = await Menu.create(product);

    return data;
  } catch (error) {
    res.status(500).json({
      error: "Could not upload food Data",
    });
  }
}

//gets all the menu(food) data: GET "/api/menus"
async function getAllMenu() {
  try {
    await deleteParticularMenu();
    const data = await Menu.find(
      {},
      {
        __v: 0,
      }
    );

    return data;
  } catch (error) {
    res.status(400).json({
      error: "Food Data not found",
    });
  }
}

async function deleteParticularMenu() {
  try {
    const data = await Menu.find(
      {},
      {
        __v: 0,
      }
    );
    const categories = await Category.find({});

    const menuArray = data.map((item) => item.food);
      const categoryArray = categories.map((item) => item.category);
      
      let deletedData;

    for (const value of menuArray) {
      if (!categoryArray.includes(value)) {
        deletedData = await Menu.findOneAndDelete({
          food: value,
        });
      }
    }
      
      return deletedData;
  } catch (error) {
    console.log(error);
  }
}


//function to add upload or update a menu: POST "api/menus/add"
async function uploadOrUpdateAMenu(menu) {
  try {
        const data = await Menu.updateOne(
        {
            id: menu.id,
        },
        menu,
        { upsert: true }
        );

        if (!data) {
        return { error: "Could not upload or update menu" };
        }

        return data;
      
  } catch (error) {
        console.log(error);
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
      error: "Could not find menu",
    });
  }
}

module.exports = {
  uploadMenuToDB,
  getAllMenu,
    getParticularMenu,
  uploadOrUpdateAMenu
};
