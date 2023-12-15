import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/contextApi";
import Home from "./Home";

function MobileCategory() {
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const { state, dispatch } = useGlobalContext();
  const { foodInfo, modalInfo, modalOpen } = state;

  //   console.log(categoryName);

  useEffect(() => {
    const getInfo = () => {
      const fetchedInfo = JSON.parse(localStorage.getItem("categoryInfo"));
      setCategoryInfo(fetchedInfo);
    };
    getInfo();
  }, [foodInfo]);

  useEffect(() => {
    const fetchName = JSON.parse(localStorage.getItem("categoryName"));
    setCategoryName(fetchName);
  }, []);

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

  //function which handles the change of amount of the particular food in the category section before adding to tray
  const selectAmountOnMobile = (num, id) => {
    dispatch({ type: "CHANGEAMOUNT", payload: { num, id } });
  };

  return (
    <>
      <Home />
      <div className="fixed top-0 flex flex-col overflow-y-auto overscroll-contain h-full w-full backdrop-opacity-90 bg-black/95 backdrop-blur-md p-5">
        {categoryName?.map((items) => {
          const { name, id } = items;
          return (
            <div
              key={id}
              className="flex justify-between items-center text-white mb-10"
            >
              <h3>{name.toUpperCase()} CATEGORY</h3>
              <Link to={"/"}>
                <span className="flex items-center cursor-pointer">
                  <i className="bx bx-x mr-2"></i>
                  <p>Close</p>
                </span>
              </Link>
            </div>
          );
        })}
        {categoryInfo ? (
          <div>
            <div className="flex items-center justify-between w-full h-[85px] mb-24">
              <div className="flex items-center text-white">
                <div className="rounded-full w-[85px] h-[85px] overflow-hidden mr-2">
                  <img
                    src={categoryInfo.img}
                    alt="category"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[125px]">
                  <p className="font-medium text-[24px] mb-2">
                    {categoryInfo.name}
                  </p>
                  <span className="flex items-center font-normal text-[14px]">
                    <i className="bx bx-timer"></i>
                    <p>15 - 25mins</p>
                  </span>
                </div>
              </div>
              <i className="bx bxs-heart-circle bx-md opacity-40 text-white cursor-pointer"></i>
            </div>
            <div>
              {categoryInfo.features.map((items) => {
                const { price, size, id, amount } = items;
                return (
                  <div key={id}>
                    <div className="flex flex-col text-white border-[#E3E3E340] p-1">
                      <div className="flex justify-between mb-3">
                        <div>
                          <p className="mb-3 text-xl">{size}</p>
                          <p className="text-xl">#{price}</p>
                        </div>
                        <div>
                          <p className="mb-3">Qty</p>
                          <div className="flex items-center justify-center ">
                            <select
                              className="rounded-3xl bg-[#D9D9D920] text-white text-[20px] px-3"
                              onChange={(e) =>
                                selectAmountOnMobile(e.target.value, id)
                              }
                            >
                              <option className="text-black">{amount}</option>
                              <option className="text-black" value="2">
                                2
                              </option>
                              <option className="text-black" value="3">
                                3
                              </option>
                              <option className="text-black" value="4">
                                4
                              </option>
                              <option className="text-black" value="5">
                                5
                              </option>
                              <option className="text-black" value="6">
                                6
                              </option>
                              <option className="text-black" value="7">
                                7
                              </option>
                              <option className="text-black" value="8">
                                8
                              </option>
                              <option className="text-black" value="9">
                                9
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          HandleAddToTray(id, foodInfo.name, foodInfo.img)
                        }
                        className="rounded-3xl bg-primary-red text-white w-[108px] ms-auto text-sm px-3 py-3"
                      >
                        Add to Tray
                      </button>
                      <hr className="my-5 border-[#2c2c2c]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
          {modalOpen && (
            <div className="absolute bottom-5 flex justify-between items-center bg-white/30 opacity-70 rounded-lg w-[365px] p-3 text-white">
              <p className="font-normal text-[14px] w-[207px]">
                {modalInfo.name} {`(${modalInfo.size.toLowerCase()} size)`} has
                been added to your food tray
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
      </div>
    </>
  );
}

export default MobileCategory;
