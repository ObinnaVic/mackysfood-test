//fetch all menus from the server
const FetchMenus = () => {
    // GET "/api/menus"



}

//fetch particular menu from the menus in the server
const fetchMenu = (MenuCategory) => {
    // GET "/api/menus/menu_category?category=launch"


}

//fetch categories of particular food
const fetchCategories = (foodCategory) => {
    // GET "api/categories?category=snacks"


}


//fetch details of a particular category
const fetchParticularFood = (foodID) => {
    // GET "/api/categories/id"
}

module.exports = {
    FetchMenus,
    fetchMenu,
    fetchCategories,
    fetchParticularFood
}