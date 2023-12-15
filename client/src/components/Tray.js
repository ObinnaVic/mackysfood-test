import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from './contextApi';
import Nav from "./Nav";

function Tray() {
  const { state, dispatch } = useGlobalContext();
  const { tray } = state;
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  //useEffect which calls and solves the total price of items currently in the tray
  useEffect(() => {
    totalFunc();
  }, [tray]);

  //useEffect that handles the fetching of the data from the local storage on every re-render or reload
  useEffect(() => {
    dispatch({ type: "FETCHTRAYFROMLOCALSTORAGE" });
  }, []);

  //function which handles the increaase in the amount of the particular food in the tray
  const changeAmount = (num, id) => {
    dispatch({ type: "CHANGEAMOUNTINTRAY", payload: { num, id } });
  };


  //function which removes a particular food from the tray
  const removeItem = (id) => {
    dispatch({ type: "REMOVEITEM", payload: id });
  };

  // FUNCTION TO CALCULATE TOTAL AND SUBTOTAL OF THE CART ITEMS
  const totalFunc = () => {
    let { total } = tray? (tray.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
      }
    )): 0;
    setSubTotal(total);
    setTotal(total);
  };

  return (
    <div className="w-11/12 mx-auto mb-20">
      <div className="md:hidden">
        <Nav menuColor={"black"} />
      </div>
      <div className="foodTray-section border-x border-[#e3e4e8]">
        <div className="flex flex-col md:hidden mb-5">
          <Link to="/delivery">
            <button className="flex items-center ml-3">
              <i className="bx bx-arrow-back mr-2"></i>
              <p className="text-sm">Back</p>
            </button>
          </Link>
          <p className="font-semibold text-xl text-center">Checkout</p>
        </div>
        <div>
          <p className="font-semibold text-xl ml-3">My food tray</p>
          <hr className="mb-7 mt-4 border-[#e3e4e8]" />
          {tray &&
            tray.map((items) => {
              const { name, price, size, img, amount, id } = items;
              return (
                <div key={id}>
                  <div className="flex items-center mx-2 my-8">
                    <div>
                      <div className="rounded-full w-[70px] h-[70px] md:w-[50px] md:h-[50px] overflow-hidden mr-2">
                        <img
                          src={img}
                          alt="category"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-[200px] md:w-[150px] lg:w-[200px]">
                      <p className="text-xs">
                        {name} ({size.toLowerCase()} portion), one bottle of
                        water and beef.
                      </p>
                      <div className="flex items-center justify-between w-28 my-2">
                        <p className="mr-2 text-sm">Quantity</p>
                        <div className="flex items-center justify-center ">
                          <select
                            className="rounded-3xl bg-[#D9D9D920] text-black text-[14px] px-1"
                            onChange={(e) =>
                              changeAmount(e.target.value, id)
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
                      <div className="flex items-center justify-between">
                        <p className="text-xs">+ free delivery to festac</p>
                        <button
                          onClick={() => removeItem(id)}
                          className="text-[#35343498] text-sm underline underline-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <h2 className="font-bold text-[15px] ms-auto text-[#6d963a]">
                      #{price}
                    </h2>
                  </div>
                </div>
              );
            })}
        </div>
        <hr className="md:mt-10 border-[#e3e4e8]" />
        <div className="px-3 py-12">
          <div className="flex justify-between mb-4">
            <p>Sub total</p>
            <h3 className="font-bold text-[#6d963a]">#{subTotal}</h3>
          </div>
          <div className="flex justify-between mb-4">
            <p>Shipping fee</p>
            <h3 className="font-bold">free</h3>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <h3 className="font-bold text-[#6d963a]">#{total}</h3>
          </div>
        </div>
        <button
          className={
            total > 0
              ? "flex mx-auto bg-primary-red py-2 px-3 rounded-3xl text-white"
              : "flex mx-auto bg-[#f0baba] py-2 px-3 rounded-3xl text-white"
          }
        >
          Pay to complete order
        </button>
        <hr className="mt-10 border-[#e3e4e8]" />
      </div>
    </div>
  );
}

export default Tray
