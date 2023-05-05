/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.png'

const Error = () => {
    return (
        <div>
            <section className="h-screen flex items-center p-16 bg-bse-100 text-neutral">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <div className="mb-8 font-extrabold text-9xl flex justify-center items-center">
              <img className='' src={error} alt="" />
            </div>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded-md text-white bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Error;