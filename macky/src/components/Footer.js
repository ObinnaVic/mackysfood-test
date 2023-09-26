import React from 'react'
import logo from "../resources/logo.png";

function Footer() {
  return (
    <footer className="bg-white p-5 md:p-14">
      <img src={logo} className="block md:hidden w-16 mb-10" alt="brand-logo" />
      <div className="flex md:justify-evenly h-[400px] md:h-[300px]">
        <div className="hidden md:flex flex-col justify-between md:h-full">
          <img src={logo} className="w-16" alt="brand-logo" />
          <p className="hidden md:block text-white">
            2023 macky’s food Inc. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-3/4">
          <div className="flex justify-evenly w-full h-4/6 md:h-full">
            <div className="flex flex-col justify-between text-black">
              <h3 className="font-semibold">Company</h3>
              <p>About Us</p>
              <p>Career</p>
              <p>Kitchen</p>
              <p>Contact Us</p>
              <p>Partnership</p>
            </div>
            <div className="flex flex-col justify-between text-black">
              <h3 className="font-semibold">Others</h3>
              <p>Customer support</p>
              <p>Food blog</p>
              <p>Terms and condition</p>
              <p>Privacy policy</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="text-black flex flex-col items-center md:items-start mt-10 md:mt-0">
            <h3 className="font-semibold">Connect with us</h3>
            <div className="flex">
              <i className="bx bxl-twitter mr-3"></i>
              <i className="bx bxl-instagram-alt mr-3"></i>
              <i className="bx bxl-facebook-circle mr-3"></i>
              <i className="bx bxl-linkedin-square"></i>
            </div>
          </div>
        </div>
      </div>
      <p className="md:hidden block text-black text-center">
        2023 macky’s food Inc. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer
