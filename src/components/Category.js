import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './contextApi';
import { Link } from 'react-router-dom';
import MobileCategory from './MobileCategory';

function Category() {
  const [categoryInfo, setCategoryInfo] = useState(null);
  const { state, dispatch } = useGlobalContext();
  const {
    selectedCategoryName,
    fetchedSelectedFood,
    selectedFoodName,
    foodInfo,
    modalInfo,
    modalOpen,
  } = state;

  //api url for fetching the categories based on the name of the food selected by the user
  const categoryUrl = `https://mackysfood-dummy-api.vercel.app/menus?name=${selectedCategoryName}`;

  //UseEffect function to handle the fetching of the category
  useEffect(() => {
    fetch(categoryUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Now you can use the fetched data here
        dispatch({ type: "FETCHEACHFOODCATEGORY", payload: data });
      })
      .catch((error) => {
        // Handle any errors that might occur during the fetch
        console.error("Fetch error:", error);
      });
  }, [selectedCategoryName]);

  useEffect(() => {
   const getInfo = () => {
     const fetchedInfo = JSON.parse(localStorage.getItem("categoryInfo"));
     setCategoryInfo(fetchedInfo);
   };
   getInfo();
  }, [foodInfo])

  //function to handle closing of the particular food catgeory selected by the user
  const CloseCategoryModal = () => {
    dispatch({ type: "CLOSECATEGORYMODAL" });
  };

  //function that passes the name and id of the particular food added to the tray to the context
  const HandleFoodInfo = (name, id ) => {
    dispatch({ type: "HANDLEFOODINFO", payload: { name, id } });
  };

  //function to close the little modal called by the setTimeOut Function
  const closeModal = () => {
    dispatch({ type: "CLOSEMODAL" });
  };

  //function that handles the addding of food to the tray and adds an amount of 0 inwhich the user can increase to desired amount
  const HandleAddToTray = (id, name, img) => {
    dispatch({
      type: "HANDLEADDTOTRAY",
      payload: { id, name, img },
    });

    //set timeout function that closes the little info modal which pops up when a user adds a particular food to the tray
    setTimeout(() => {
      closeModal();
    }, 5000);
  };

  //function which handles the increaase in the amount of the particular food in the category section before adding to tray
  const increaseAmountFromCategory = (id) => {
    dispatch({ type: "INCREASEAMOUNTFROMCATEGORY", payload: id });
  };

  //function which reduces the amount of the particular food in the category section before adding to tray
  const reduceAmountFromCategory = (id) => {
    dispatch({ type: "REDUCEAMOUNTFROMCATEGORY", payload: id });
  };

  return (
    <div className="fixed top-0 flex flex-col justify-center items-center overflow-y-auto overscroll-contain h-full w-full backdrop-opacity-70 bg-black/95 p-5">
      {/*Modal that displays the food delicacies of the particular food selected by the user */}
      {fetchedSelectedFood &&
        fetchedSelectedFood.map((foodItems) => {
          const { name, categories, id } = foodItems;
          return (
            <div
              className="flex flex-col justify-center w-full md:w-4/6"
              key={id}
            >
              <div className="flex justify-between items-center text-white mb-10">
                <h3>{name.toUpperCase()} CATEGORY</h3>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={CloseCategoryModal}
                >
                  <i className="bx bx-x mr-2"></i>
                  <p>Close</p>
                </span>
              </div>
              <div className="flex justify-evenly flex-wrap">
                {/* displays all the available food delicacies of the particular food selected by the user */}
                {categories.map((items) => {
                  const { name, img, id } = items;
                  return (
                    <div key={id}>
                      {/*Category display for desktop */}
                      <div
                        className={
                          selectedFoodName === name || selectedFoodName === ""
                            ? "hidden md:block cursor-pointer opacity-95 mb-5"
                            : "hidden md:block cursor-pointer opacity-50 grayscale mb-5"
                        }
                        onClick={() => HandleFoodInfo(name, id, foodItems.name)}
                      >
                        <div className="rounded-full w-[162.81px] h-[162.81px] overflow-hidden mb-8">
                          <img
                            src={img}
                            alt="category"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center justify-between text-white ">
                          <div>
                            <p className="text-sm md:text-xl">{name}</p>
                            <span className="flex items-center text-[10px] md:text-sm">
                              <i className="bx bx-timer"></i>
                              15 - 25mins
                            </span>
                          </div>
                          <i className="bx bxs-heart-circle bx-md opacity-40 cursor-pointer"></i>
                        </div>
                      </div>

                      {/*Category display for mobile */}
                      <div
                        className="block md:hidden mb-10"
                        onClick={() => HandleFoodInfo(name, id, foodItems.name)}
                      >
                        <Link to="/foodinfo">
                          <div className="rounded-full w-[162.81px] h-[162.81px] overflow-hidden mb-8">
                            <img
                              src={img}
                              alt="category"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-center justify-between text-white ">
                            <div>
                              <p className="text-sm md:text-xl">{name}</p>
                              <span className="flex items-center text-[10px] md:text-sm">
                                <i className="bx bx-timer"></i>
                                15 - 25mins
                              </span>
                            </div>
                            <i className="bx bxs-heart-circle bx-md opacity-40 cursor-pointer"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="hidden md:flex w-full">
                {/*Displays the information about a particular food delicacy selected by the user on desktop */}
                {categoryInfo && selectedFoodName
                  ? categoryInfo.features.map((items) => {
                      const { size, price, amount, id } = items;
                      return (
                        <div
                          key={id}
                          className="flex flex-col md:w-11/12 text-white md:border-e border-[#E3E3E340] p-1 md:p-5"
                        >
                          <div className="flex justify-between md:w-full mb-3">
                            <div>
                              <p className="mb-3 text-xl">{size}</p>
                              <p className="text-xl">#{price}</p>
                            </div>
                            <div>
                              <p className="mb-3">Qty</p>
                              <div className="flex items-center justify-center rounded-3xl border border-[#e3e4e8]">
                                <button
                                  onClick={() => reduceAmountFromCategory(id)}
                                  className="mx-2"
                                >
                                  <i className="bx bx-minus"></i>
                                </button>
                                {amount}
                                <button
                                  onClick={() => increaseAmountFromCategory(id)}
                                  className="mx-2"
                                >
                                  <i className="bx bx-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              HandleAddToTray(id, foodInfo.name, foodInfo.img)
                            }
                            className="rounded-3xl bg-primary-red text-white w-32 ms-auto text-sm px-3 py-3"
                          >
                            Add to Tray
                          </button>
                          <hr className="my-5 border-[#2c2c2c]" />
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          );
        })}
      {modalOpen && (
        <div className="hidden md:flex justify-between items-center bg-white/30 opacity-70 rounded-lg w-3/5 mx-auto p-3 text-white">
          <p>
            {modalInfo.name} {`(${modalInfo.size.toLowerCase()} size)`} has been
            added to your food tray
          </p>
          <Link to="/delivery">
            <button className="rounded-3xl bg-primary-yellow text-white text-sm px-[15px] py-[12px]">
              {" "}
              Proceed to pay
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Category
