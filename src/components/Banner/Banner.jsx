/* eslint-disable no-unused-vars */
import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className="bg-slate-100 py-10 md:py-0">
            <div className="flex justify-between container mx-auto items-center lg:px-[6.5rem] ">
                <div className="space-y-4 text-center lg:text-left px-5 md:px-0">
                    <h1 className="text-5xl font-bold">
                        One Step <br /> Closer To Your <br />{" "}
                        <span className="text-blue-400 ">Dream Job</span>
                    </h1>
                    <p className="max-w-[500px]">
                        Explore thousands of job opportunities with all the
                        information you need. Its your future. Come find it.
                        Manage all your job application from start to finish.
                    </p>
                    <button
                        type="button"
                        className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                    >
                        Get Started
                    </button>
                    
                </div>

               
            </div>
        </div>
        </div>
    );
};

export default Banner;