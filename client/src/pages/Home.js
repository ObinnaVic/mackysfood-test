import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../components/contextApi";
import Category from "./Category";
import Nav from "../components/Nav";
import ComingSoon from "../resources/comingsoon.png";
import mobile from "../resources/mobile.png";
import loading from "../resources/loading.gif";

function Home() {
  const [imageLoading, setImageLoading] = useState(true);
  const { state, dispatch } = useGlobalContext();
  const { category, selectedCategory, selectedCategoryName } = state;

  const apiUrl = "https://mackysfood-dummy-api.vercel.app/menus"; //Api endpoint to fetch the list of all the menu items

  useEffect(() => {
    setTimeout(() => {
      setImageLoading(false);
    }, [5000]);
  }, []);

  // Make a GET request using the fetch function
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Now you can use the fetched data here to populate the menu array in the state
        dispatch({ type: "FETCHMENU", payload: data });
        const category = [];
        //looping and getting the categories so as to populate the categories buttons
        for (const each of data) {
          category.push(each.category);
        }
        //updates the state with the available categories fetched
        dispatch({ type: "FETCHCATEGORY", payload: category });
      })
      .catch((error) => {
        // Handle any errors that might occur during the fetch
        console.error("Fetch error:", error);
      });
  }, []);

  //function that handles the selected category by the user
  const handleCategory = (category) => {
    dispatch({ type: "CHANGECATEGORY", payload: category });
  };

  //function that handles and passes the selected food name to the context state api
  const HandleSelectedCategory = (name) => {
    dispatch({ type: "HANDLESELECTEDFOOD", payload: name });
  };

  return (
    <main className="w-full">
      <div className="absolute top-0  w-full md:h-[20%]">
        <Nav menuColor={"white"} />
      </div>
      <div className="hero-section flex flex-col items-center justify-center w-full h-[928px] lg:h-screen">
        <div className="text-center text-white mb-[60px] lg:mb-10">
          <h1 className="flex items-center font-extrabold text-[36px] md:text-[48px] w-[358px] h-[206px] lg:w-[864px] lg:h-[126px] md:w-2/3 mx-auto mb-10">
            Order and get quality food delivered to you in just 20 minutes
          </h1>
          <h3 className="w-[282px] h-[66px] md:w-[340px] lg:w-[556px] lg:h-50px font-semibold text-[14px] lg:text-[16px] mx-auto">
            Order your favourite dishes and have it delivered to your doorstep
            in a jiffy choose between wide range of quality and prices
          </h3>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input w-[369px] lg:w-[669px] max-[360px]:w-[320px]"
            placeholder="What are you looking for?"
          />
          <button type="button" className="search-button rounded-3xl">
            &#128269; Search
          </button>
        </div>
        <div className="flex flex-col md:flex-row text-white items-center mt-[80px] md:mt-4">
          <p className="text-sm mr-2">Popular dishes: </p>
          <p className="text-xs md:text-sm border border-white rounded-3xl m-3 md:m-1 py-[6px] px-2">
            White rice and stew
          </p>
          <p className="text-xs md:text-sm border border-white rounded-3xl m-3 md:m-1 py-[6px] px-2">
            Pounded yam and Egusi
          </p>
          <p className="text-xs md:text-sm border border-white rounded-3xl m-3 md:m-1 py-[6px] px-2">
            Jollof rice
          </p>
        </div>
      </div>
      <div className="bg-white w-full md:w-4/6 mx-auto py-10">
        <div className="flex flex-col items-center">
          <header>
            <h1 className="font-bold">Choose from our tasty meal categories</h1>
          </header>
          <div className="flex ">
            {category.length > 0 &&
              category.map((item, index) => {
                return (
                  <button
                    className="border border-[#CDCDCD] hover:border-primary-red rounded-full py-1 md:py-3 px-2 md:px-3 mx-2 md:mx-5 my-12"
                    key={index}
                    onClick={() => handleCategory(item)}
                  >
                    <h2>{item}</h2>
                  </button>
                );
              })}
          </div>
        </div>
        {/*If the categories or menu is empty, display a "loading", else display the selected category or the full menu */}
        {selectedCategory.length === 0 ? (
          <img
            src={loading}
            className="flex mx-auto w-[100px]"
            alt="loading animation"
          />
        ) : (
          <div className="grid grid-flow-row md:grid-cols-3 grid-cols-2 md:grid-rows-3 grid-rows-5 gap-[20px] mx-auto mb-20">
            {selectedCategory.map((items) => {
              const { img, name, categories, id } = items;
              return (
                <div
                  key={id}
                  className=" mx-auto w-[170px] h-[301px] lg:w-[220px]  lg:h-[252px] max-[360px]:w-[150px] mb-10"
                >
                  {imageLoading ? (
                    <img
                      src={loading}
                      className="flex mx-auto w-[100px]"
                      alt="loading animation"
                    />
                  ) : (
                    <div className="flex justify-center items-center mx-auto rounded-full w-[170.51px] h-[170.51px] md:w-[155px] md:h-[155px] lg:w-[170.51px] lg:h-[170.51px] max-[360px]:w-[130px] max-[360px]:h-[130px] overflow-hidden mb-7 border border-primary-red">
                      <img
                        src={img}
                        alt="foods"
                        loading="lazy"
                        className="rounded-full w-[162.81px] h-[162.81px] md:w-[150px] md:h-[150px] lg:w-[162.81px] lg:h-[162.81px] max-[360px]:w-[120px] max-[360px]:h-[120px]"
                      />
                    </div>
                  )}

                  <div className="flex flex-col items-center mx-auto lg:flex-row lg:justify-between w-[105px] h-[112.5px] lg:w-[220px] lg:h-[43px]">
                    <div className="text-center md:text-left mb-4">
                      <p className="text-[18px] font-semibold">
                        {`${name.split("")[0].toUpperCase()}${name.slice(1)}`}
                      </p>
                      <p className="text-[12px] font-normal">
                        {categories.length} categories
                      </p>
                    </div>
                    <button
                      className="rounded-3xl bg-primary-red text-white text-[14px] w-[110px] h-[45px] md:w-[86px] md:h-[35px] py-[14px] px-[25px] md:py-[9px] md:px-[18px]"
                      onClick={() => HandleSelectedCategory(name)}
                    >
                      view all
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="bg-[#FEEFAC] relative w-[97%] md:w-full h-36 md:h-48 rounded-3xl mb-16 mx-auto">
          <div className="absolute top-10 md:top-14 left-2 md:left-28">
            <img
              src={ComingSoon}
              className="w-32 md:w-40"
              alt="comingsoon-banner"
            />
            <div className="flex flex-col absolute top-8 md:top-11 left-10 md:left-16">
              <h1 className="text-primary-red font-semibold text-xl md:text-4xl">
                MackysFood
              </h1>
              <p className="text-xs font-semibold opacity-70 ms-auto">
                Mobile app
              </p>
            </div>
          </div>
          <img
            src={mobile}
            className="h-[100%] ms-auto me-5"
            alt="mobile-app"
          />
        </div>
      </div>
      {selectedCategoryName && <Category />}
    </main>
  );
}

export default Home;
