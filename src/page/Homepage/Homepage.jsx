/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import Team from "../../components/Team/Team";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Gallery from "../../components/Gallery/Gallery";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://recipe-hub-server-zeta.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <Banner />
        <Category />
      </div>
      <div className="container  py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl ">
          Our Chief Chef
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-700 ">
          A chef is a professional cook and tradesman who is proficient in all
          aspects of food preparation, often focusing on a particular cuisine.
          The word Chef is derived from the term chef de cuisine the director or
          head of a kitchen.
        </p>

        {loading ? (
          <div className="mt-5 flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-auto lg:gap-12 container mx-auto lg:px-12 relative">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="col-span-12 mb-10 lg:col-span-4 rounded-md shadow-md "
              >
                <div className="">
                  <LazyLoad>
                    <img
                      src={recipe.chef.chef_photo}
                      alt=""
                      className="object-cover object-top w-full rounded-t-md h-72 "
                    />
                  </LazyLoad>
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-semibold tracking-wide">
                        {recipe.chef.chef_name}
                      </h2>
                      <p className="">
                        <b>Year of Experience: </b>
                        {recipe.chef.experience}
                      </p>
                      <p>
                        <b>Likes: </b>
                        {recipe.chef.likes}
                      </p>
                    </div>
                  </div>
                </div>
                <Link to={`/chef_detail/${recipe.id}`}>
                  <button
                    type="button"
                    className="w-full px-6 py-2 font-bold text-cyan-50 border-md rounded-b-md bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                  >
                    Read more
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <Gallery />
      <div>
        <Team></Team>
      </div>
    </div>
  );
};

export default Homepage;
