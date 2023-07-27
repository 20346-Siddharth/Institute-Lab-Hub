import React from "react";
// import Learner_Landing from '../Learner/Learner_Landing'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
const Book_Slot = (props) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get('http://localhost:4000/api/getAllLabs');
  //     setData(result.data);
  //   }
  //   fetchData();
  // }, []);
  //const { title, institute,location,price,description } = props.location.state;
  const { labName, description, instituteName, location, fees,_id } = useParams();
  document.cookie = `labId=${_id}; path=/`;
  return (
    <>
    <div className=" h-screen bg-slate-300">
      <div className="container my-0" >
        <div className="my-0  bg-gray-100 flex justify-center items-center ">
          {/* <div className="container mx-auto bg-blue-600 p-2 py-4">
            <form>
              <h1 className="text-center font-bold text-white text-4xl">
                InstituteLabHub-Learner
              </h1> */}
              {/* <p className="mx-auto font-normal text-sm my-6 max-w-lg">Enter your select domain name and choose any
					extension name in the next step (choose between .com, .online, .tech, .site, .net, and more)</p> */}
              {/* <br /> */}
              {/* <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                <input
                  className="text-base text-gray-400 flex-grow outline-none px-2 "
                  type="text"
                  placeholder="Search your domain name"
                />
                <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                  <button className="bg-blue-600 text-white text-base rounded-lg px-4 py-2 font-thin">
                    Search
                  </button>
                </div>
              </div> */}
            {/* </form>
          </div> */}
        </div>
      </div>
      <br />
      {/* lab description */}
      <div className="container w-4/5 content-center p-4 self-center mx-36">
        <div className="overflow-hidden bg-gray-400 sm:rounded-lg shadow-2xl">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-2xl font-semibold leading-8 text-gray-900 ">
              Laboratory Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-100">
              Important details about this lab
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Lab Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {/* {props.title} */}
                  {labName}
                </dd>
              </div>
              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Institute Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {/* {props.institute} */}
                  {instituteName}
                </dd>
              </div>
              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">City</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {/* {props.location} */}
                  {location}
                </dd>
              </div>
              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Pincode</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {/* {props.location} */}
                {location}
                </dd>
              </div>
              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                 {/* {props.location} */}
                 {location}
                </dd>
              </div>
              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Price</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {/* {props.price} */}
                  {fees}
                </dd>
              </div>

              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {/* {props.description} */}
               {description}
                </dd>
              </div>

              <div className="bg-gray-200 px-4 py-5 flex justify-center container">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28">
                  <Link to="/bookslotform">Book Slot</Link>
                
                </button>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* Footer */}
      {/* <footer
  className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left mb-0">
  <div className="p-4 text-center text-neutral-700 dark:text-neutral-200 mb-0">
    © 2023 Copyright:
    <a
      className="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >InstituteLabHub</a
    >
  </div>
</footer> */}
</div>
    </>
  );
};

export default Book_Slot;
