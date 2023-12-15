import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import logo from "../resources/logo.png";
import { useGlobalContext } from './contextApi';

function Nav({menuColor}) {
  const {state, dispatch} = useGlobalContext();
  const {navSlide} = state;


  const openNav = () => {
    dispatch({type: "OPENNAV"})
  }

  const closeNav = () => {
    dispatch({type: "CLOSENAV"})
  }

  return (
    <nav>
      {/* Mobile Nav Slide*/}
      <div className={navSlide ? "nav-container open-nav" : "nav-container"}>
        <div className="flex justify-between items-center h-[10%] w-full">
          <i onClick={closeNav} className="bx bx-x bx-md text-black"></i>
          {/* <img src={logo} className="w-36" alt="logo" /> */}
        </div>
        <hr className="mx-3 my-5 border-[#e3e4e8]" />
        <div>
          <div className="">
            <ul className=" text-primary-red">
              <li className="flex items-center m-4 text-[15px] font-bold cursor-pointer">
                <i className="bx bx-list-ul bx-md mr-2"></i>
                <p>Food Catalogue</p>
              </li>
              <li className="flex items-center m-4 text-[15px] font-bold cursor-pointer">
                <i className="bx bx-store bx-md mr-2"></i>
                <p>Nearby Store</p>
              </li>
              <li className="flex items-center m-4 text-[15px] font-bold cursor-pointer">
                <i className="bx bxs-hot bx-md mr-2"></i>
                <p>Hot Deals</p>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <Link to={"/tray"}>
              <button
                onClick={closeNav}
                className="flex items-center justify-center border border-primary-red w-40 h-12 p-2 m-4 rounded-full text-primary-red text-sm font-bold"
              >
                <i className="bx bx-shopping-bag mr-2"></i>
                <span>Food tray</span>
              </button>
            </Link>
            <button
              onClick={closeNav}
              className="flex items-center bg-primary-red w-40 h-12 p-4 m-4 rounded-full text-sm text-center text-white"
            >
              <i className="bx bx-user mr-2"></i>
              <span>My Account</span>
            </button>
          </div>
        </div>
        <hr className="mx-3 my-5 border-[#e3e4e8]" />
      </div>

      {/*Desktop NAVIGATION*/}
      <div className="bg-[transparent] w-full md:h-[20%]">
        <div className="flex justify-between items-center mx-auto w-11/12">
          <img className="w-20" src={logo} alt="logo" />
          <div className="hidden md:block w-5/12">
            <ul className="flex justify-end text-white">
              <li className="mr-5 text-xs cursor-pointer">Food Catalogue</li>
              <li className="mr-5 text-xs cursor-pointer">Nearby Store</li>
              <li className="mr-5 text-xs cursor-pointer">Hot Deals</li>
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            <Link to={"/delivery"}>
              <button className="flex items-center justify-center border border-primary-red w-32 h-12 p-2 mx-5 rounded-full text-primary-red text-sm font-bold">
                <i className="bx bx-shopping-bag mr-2"></i>
                <span>Food tray</span>
              </button>
            </Link>
            <button className="flex items-center bg-primary-red w-32 h-12 p-4 rounded-full text-sm text-center text-white">
              <i className="bx bx-user mr-2"></i>
              <span>My Account</span>
            </button>
          </div>
          <i
            onClick={openNav}
            className="bx bx-menu bx-md block md:hidden"
            style={{ color: `${menuColor}` }}
          ></i>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Nav
