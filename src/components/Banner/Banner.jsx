/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="https://i.ibb.co/CMCfxm6/Masala-spatchcock-chicken-2bfc2da.webp"
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              Your new Test
            </h5>
            <p className="mb-5 text-gray-700">
              Would you like millions of new customers to enjoy your amazing
              food and groceries? So would we! It's simple: we list your menu
              and product lists online, help you process orders, pick them up,
              and deliver them to hungry pandas – in a heartbeat! Interested?
              Let's start our partnership today!
            </p>
            <div className="flex items-center">
             <Link to="?">
             <button
                type="submit"
                className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
              >
                Get started
              </button>
             </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
