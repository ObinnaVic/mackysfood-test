import React from 'react'
import { useGlobalContext } from './contextApi';
import { Link } from 'react-router-dom';

function Address() {
    const {state, dispatch} = useGlobalContext();
    const {addressInput} = state;

    //function to handle the closing of the address modal
    const closeAddressModal = () => {
        dispatch({type: "CLOSEADDRESSMODAL"})
    }

    //function to handle the opening of the address modal
    const openAddressInput = () => {
      dispatch({type: "OPENADDRESSINPUT"})
    }

  return (
    <div className="w-full md:w-3/5 bg-white p-5">
      <div className="flex justify-between w-full mb-5">
        <p className="font-semibold text-[24px]">Delivery details</p>
        <i
          className="bx bx-x bx-md cursor-pointer"
          onClick={closeAddressModal}
        ></i>
      </div>
      {addressInput ? (
        <div>
          <div className="flex items-center rounded-3xl p-2 w-full md:w-2/3 md:mx-auto my-10 bg-[#F9F8F8]">
            <i className="bx bxs-location-plus text-gray-400 mr-2"></i>
            <input
              type="text"
              placeholder="Enter your state and country"
              className="rounded-3xl p-4 md:p-2 md:w-full outline-none bg-[#F9F8F8]"
            />
          </div>
          <div className="flex items-center rounded-3xl p-2 w-full md:w-2/3 md:mx-auto my-10 bg-[#F9F8F8]">
            <i className="bx bxs-location-plus text-gray-400 mr-2"></i>
            <input
              type="text"
              placeholder="Enter your town"
              className="rounded-3xl p-4 md:p-2 md:w-full outline-none bg-[#F9F8F8]"
            />
          </div>
          <Link to={"/tray"}>
            <button className="flex bg-primary-red text-white rounded-3xl mx-auto px-5 py-2 mt-3">
              Save
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="flex flex-col items-center w-full">
            <li className="py-3">
              <p className="font-semibold text-[14px]">
                6c Rd, Festac town, Lagos state, Nigeria.
              </p>
            </li>
            <li className="py-3">
              <p className="font-semibold text-[14px]">
                6c Rd, Festac town, Lagos state, Nigeria.
              </p>
            </li>
            <li className="py-3">
              <p className="font-semibold text-[14px]">
                6c Rd, Festac town, Lagos state, Nigeria.
              </p>
            </li>
          </ul>
          <button
            onClick={openAddressInput}
            className="flex bg-primary-red text-white rounded-3xl mx-auto px-5 py-2 mt-3"
          >
            Add a new address
          </button>
        </div>
      )}
    </div>
  );
}

export default Address
