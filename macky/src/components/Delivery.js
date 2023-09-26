import React from 'react'
import { Link } from 'react-router-dom';
import Tray from './Tray';
import Address from './Address';
import Nav from "./Nav";
import { useGlobalContext } from './contextApi';

function Delivery() {
  const {state, dispatch} = useGlobalContext()
  const {addressModal} = state;

  //function to handle the opening of the address  modal
  const HandleAddressModal = () => {
    dispatch({ type: "OPENADDRESSMODAL" });
  }
  
  return (
    <div>
      <Nav menuColor={"black"} />
      <div className="flex mx-auto w-11/12 mb-20">
        <div className="w-11/12 md:w-7/12 lg:w-3/5 mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between mb-5">
            <Link to="/">
              <button className="flex items-center">
                <i className="bx bx-arrow-back mr-2"></i>
                <p className="text-sm">Back</p>
              </button>
            </Link>
            <p className="font-semibold text-[20px] text-center">Checkout</p>
          </div>
          <div>
            <p className="font-semibold text-[18px]">Delivery options</p>
            <hr className="mb-7 mt-4 border-[#e3e4e8]" />
          </div>
          <div className="md:px-10">
            <div className="flex flex-col md:flex-row ">
              <div className="flex flex-col mb-5 md:mb-0 md:mr-12">
                <label htmlFor="" className="mb-3 text-sm md:text-[10px]">
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="rounded-3xl p-4 md:p-2 md:w-full outline-none border border-[#a4abb9] bg-[#F9F8F8]"
                />
              </div>
              <div className="flex flex-col mb-5 md:mb-0">
                <label htmlFor="" className="mb-3 text-sm md:text-[10px]">
                  Email address
                </label>
                <input
                  type="text"
                  placeholder="Email address"
                  className="rounded-3xl p-4 md:p-2 md:w-full outline-none border border-[#a4abb9] bg-[#F9F8F8]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between my-12 md:px-10">
            <div className="mb-10 md:mb-0">
              <p className="text-[14px] font-semibold mb-3">
                Deliver to my default address
              </p>
              <p className="text-[#20202060] text-[14px] font-normal">
                6c Rd, Festac town, Lagos state, Nigeria.
              </p>
            </div>
            <button
              onClick={HandleAddressModal}
              className="bg-white rounded-3xl border border-primary-red text-primary-red font-semibold text-[14px] w-[198px] h-[43px] px-[18px] py-[13px]"
            >
              Change default address{" "}
            </button>
          </div>
          <div className="md:px-10">
            <p className="text-[16px] md:text-[12px] font-bold mb-5">
              Delivery instructions
            </p>
            <textarea
              placeholder="Eg: Leave food with receptionist I’m in a meeting "
              className="w-full h-[100px] outline-none border border-[#a4abb9] bg-[#F9F8F8] rounded-xl p-2"
            ></textarea>
          </div>

          <Link to="/tray">
            <button className="flex ms-auto md:hidden bg-primary-red text-white rounded-3xl px-[18px] py-[12px] my-10">
              Next
            </button>
          </Link>
          <hr className="md:mt-10 border-[#e3e4e8]" />
          {/*displays the address modal based on the boolean condition of the addressModal */}
          {addressModal && (
            <div className="fixed flex justify-center items-center top-0 left-0 h-full w-full backdrop-opacity-70 bg-black/90 ">
              <Address />
            </div>
          )}
        </div>
        {/*Tray displays on same page with delivery page on the desktop view, while it is a different page on the mobile view */}
        <div className="hidden md:flex md:w-5/12 lg:w-2/5">
          <Tray />
        </div>
      </div>
    </div>
  );
}

export default Delivery
