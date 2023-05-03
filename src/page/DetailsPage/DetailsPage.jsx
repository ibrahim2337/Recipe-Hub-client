/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const chefDetail = useLoaderData();
  const { id, chef } = chefDetail;
  const { chef_photo, chef_name, experience, likes, recipes } = chef;

  return (
    <div>
      <div>
        <section className="">
          <div className="container flex flex-col-reverse mx-auto mt-5  lg:flex-row">
            <div className="flex flex-col  px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className=" leading-snug">
                    <b>Name : </b>
                    {chef_name}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="leading-snug">
                    <b>Bio : </b>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="leading-snug">
                    <b>Number of recipes : </b>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="leading-snug">
                    <b>Years of experience : </b>
                    {experience}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="leading-snug">
                    <b>Likes : </b>
                    {likes}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5">
              <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
                <img src={chef_photo} alt="" className="rounded-lg shadow-lg" />
                <div className="mt-2">
                  <h3 className="text-lg font-medium "></h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
            {recipes.map((recipe,index) => (
                <div key={index}>
                    <div className="container flex flex-col mx-auto e mt-5 lg:flex-row">
        
        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img src={recipe.image} alt="" className="rounded-lg shadow-lg" />
                
              </div>
          
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold leading-none">
            {recipe.name}
            </h2>
            <p className="mt-4 mb-2  text-sm">
              <b>Description : </b>
          
            {recipe.description}
            </p>
            <p className="mt-2 mb-2  text-sm"><b>Review : </b>
            {recipe.review}
            </p>
            <div className="flex items-center md-2 space-x-2">
            <b>Rating : </b>
                  {recipe.rating}
                </div>
            <button
             className="self-start mt-2 px-10 py-3 text-lg  font-medium rounded-3xl dark:bg-violet-400 dark:text-gray-900">
              kdkssd
            </button>
          </div>
        </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
