/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import Team from "../../components/Team/Team";
import Banner from "../../components/Banner/Banner";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (

    <div>
      <div>
        <Banner />
      </div>
      {recipes.map((recipe,index) => (
        <div key={index} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src=""
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
      >
        Read more
      </button>
      <div>
        <Team></Team>
      </div>
    </div>
    
  );
};

export default Homepage;
