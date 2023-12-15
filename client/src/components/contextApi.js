import React, { createContext, useContext, useReducer} from 'react'

//Using the ContextApi and UseReducer to handle states in the whole application
export const AppContext = createContext();


const initialState = {
  menu: [], //The whole available food menu
  tray: [], //The food tray
  category: [], //An array of the category buttons (launch, dinner, breakfast, all)
  selectedCategory: [], //Array of the food category selected by the user. Either only foods of launch, breakfast and so on
  selectedCategoryName: "", //Name of the food selected by the user under the selected category
  fetchedSelectedFood: [], //An array of the different available delicacies under a selected food name, eg, rice has Jollof, and fried delicacies 
  selectedFoodName: "", //The name of the particular food delicacy selected by the user
  foodInfo: [], //The information on the selected food eg price, image, id etc
  mobileFoodInfo: {}, //This passes the data of the particular food click to the mobile component display.
  modalInfo: {}, //Information of the selected food on the little modal that informs the user that the food has been added to the cart
  modalOpen: false, //Boolean that decided if the little modal is open or not
  navSlide: false, //Boolean that decides if the mobile nav slide is open or not
  addressModal: false, //Boolean that decides if the address modal is open or not. Th modal for users to view their current addresses
  addressInput: false //Boolean that decides if the modal for address input is open or not. Used for users to input a new address
};


const reducer = (state, action) => {
  //statement to fetch and populate all the available food menus both on the menu array and the selectedcategory array
  //On the selectedcategory because on first load of the app, the categories section can not be empty
  //thereby it is populated by all the available food in the menu before selection by the user can be done
  if (action.type === "FETCHMENU") {
    return {...state, menu:action.payload, selectedCategory:action.payload}
  }
  
  //statement that dynamically fetches all the available categories in the menu for the category buttons
  if (action.type === "FETCHCATEGORY") {
    const uniqueArr = new Set(action.payload)
    //manually added an "all" to the category array because we cant have an all category in the fetched food menu
    const category = [...uniqueArr, "all"];
    return {...state, category:category}
  }

  //statement that changes what food is displayed according to the category selected by the user
  if (action.type === "CHANGECATEGORY") {
    //filters the whole menu and gets only the food items that equals the selected category
    const filteredMenu = state.menu.filter((item) => action.payload === "all"? item.category !== action.payload : item.category === action.payload)
    return {...state, selectedCategory:filteredMenu}
  }

  //statement that changes the selectedcategoryName string to the current name of the food selected by the user
  if (action.type === "HANDLESELECTEDFOOD") {
    return { ...state, selectedCategoryName: action.payload };
  }

  //statement that fetches the available food delicacies of the selected available food
  if (action.type === "FETCHEACHFOODCATEGORY") {
    localStorage.setItem("categoryName", JSON.stringify(action.payload))
    return {...state, fetchedSelectedFood: action.payload}
  }

  //Statement to reset the selectedCategory name and selected food name when the modal that displays the delicacies available to a particular selected food closes
  if (action.type === "CLOSECATEGORYMODAL") {
    return { ...state, selectedCategoryName: "", selectedFoodName: "" };
  }

  //statement that filters and displays the food information of the particular delicacy that was selected by the user
  if (action.type === "HANDLEFOODINFO") {
    const {name, id} = action.payload;
    //filters the fetchedSelectedFood to get the category that equals the id passed
    const OnefoodInfo = state.fetchedSelectedFood[0].categories.filter((item) => item.id === id)[0];
    const category = OnefoodInfo;

    localStorage.setItem("categoryInfo", JSON.stringify(category));

    return {
      ...state,
      selectedFoodName: name,
      foodInfo: category,
    };
  }

  //Statement which handles the increase or decrease of the amount value
  if (action.type === "CHANGEAMOUNT") {
    const {num, id} = action.payload
    const features = state.foodInfo.features.map((item) => {
      if (item.id === id) {
        item = { ...item, amount: num };
      }
      return item;
    });

    const newInfo = { ...state.foodInfo, features };
    localStorage.setItem("categoryInfo", JSON.stringify(newInfo));

    return { ...state, foodInfo: newInfo };
  }

  //statement that addds a particular food to the food tray when the user clicks on the add to tray
  if (action.type === "HANDLEADDTOTRAY") {
    const {id, name, img} = action.payload;
    //selectedSize is the features informationof the particular food delicacy that was added to the tray
    const selectedFoodinfo = state.foodInfo.features.filter((item) => item.id === id)
    const selectedSize = 
    {...selectedFoodinfo[0], 
      name, img};

      console.log(selectedSize);
      
    const newTray = [...state.tray, selectedSize];

    //uniqueTray is used to avoid duplicates of food in the food tray. I more quantity of a particular food
    //is needed, the increase in amount is done after the food is added to the tray
    const uniqueTray = Array.from(
      new Set(newTray.map((obj) => JSON.stringify(obj)))
    ).map((strObj) => JSON.parse(strObj));

    //saving the updated tray in the localStorage of the user's browser 
    localStorage.setItem("tray", JSON.stringify(uniqueTray));
    
    return {...state, tray: uniqueTray, modalInfo:selectedSize, modalOpen: true }
  }

  //statement which closes the little modal which contains details of the food added to the tray
  if (action.type === "CLOSEMODAL") {
    return {...state, modalOpen: false}
  }

  //statement to fetch and update the state tray according to what is currently in the localStorage of the user's browser
  if (action.type === "FETCHTRAYFROMLOCALSTORAGE") {
    const tray = JSON.parse(localStorage.getItem("tray"));
    return {...state, tray: tray}
  }

  //statement which handles the increasing function of a particular food amount in the tray
  if (action.type === "CHANGEAMOUNTINTRAY") {
    const {num, id} = action.payload
    //maps ovver the food in the tray and adds 1 to the selected food count
    let addAmount = state.tray.map((item) => {
      if (item.id === id) {
        item = { ...item, amount: num };
      }
      return item;
    })

    //send the updates/changes to the localStorage
    localStorage.setItem("tray", JSON.stringify(addAmount));

    return {...state, tray: addAmount}
  }

  //statement to remove a particular food from the tray
  if (action.type === "REMOVEITEM") {
    let filteredTray = state.tray.filter((item) => item.id !== action.payload)

    //updates the local Storage
    localStorage.setItem("tray", JSON.stringify(filteredTray))

    return {...state, tray: filteredTray}
  }

  //Statement to open the navigation slide of the mobile view
  if (action.type === "OPENNAV") {
    return {...state, navSlide: true}
  }

  //statement to close the navigation slide of the mobile view
  if (action.type === "CLOSENAV") {
    return {...state, navSlide: false}
  }

  //statement to open the modal which shows the address of the user
  if (action.type === "OPENADDRESSMODAL") {
    return {...state, addressModal: true}
  }

  //statement to close the address modal 
  if (action.type === "CLOSEADDRESSMODAL") {
    return {...state, addressModal: false}
  }

  //statement to open the address input modal which enables users to input a new address
  if (action.type === "OPENADDRESSINPUT") {
    return {...state, addressInput: true}
  }

  return state;
}

function ContextApi({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch}
    
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextApi;

export const useGlobalContext = () => {
  return useContext(AppContext);
}
