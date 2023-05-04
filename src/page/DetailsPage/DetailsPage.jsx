/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const DetailsPage = () => {
    const [fav, setFav] = useState(false);
    const chefDetail = useLoaderData();
    const { id, chef } = chefDetail;
    const {
        chef_photo,
        chef_name,
        bio,
        number_of_recipes,
        experience,
        likes,
        recipes,
    } = chef;

    const handleFav = () => {
        setFav(true);
        toast.success("Add Favorite Success");
    };

    return (
        <div>
            <div className="">
                <section className="">
                    <div className="container flex flex-col-reverse items-center justify-center mx-auto mt-5  lg:flex-row">
                        <div className="flex flex-col rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
                            <div className="flex space-x-2 sm:space-x-4 mb-2">
                                <div className="space-y-2">
                                    <p className=" leading-snug text-2xl ">
                                        <b>Name : </b>
                                        {chef_name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4 mb-1">
                                <div className="space-y-2">
                                    <p className="leading-snug text-lg">
                                        <b>Bio : </b>
                                        {bio}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4 mb-1">
                                <div className="space-y-2">
                                    <p className="leading-snug text-lg">
                                        <b>Number of recipes : </b>
                                        {number_of_recipes}
                                    </p>
                                </div>
                            </div>

                            <div className="flex space-x-2 sm:space-x-4 mb-1">
                                <div className="space-y-2">
                                    <p className="leading-snug">
                                        <b>Years of experience : </b>
                                        {experience}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4 mb-1">
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
                                <LazyLoad>
                                    <img
                                        src={chef_photo}
                                        alt=""
                                        className="rounded-full shadow-lg"
                                    />
                                </LazyLoad>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium "></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="">
                    {recipes.map((recipe, index) => (
                        <div key={index}>
                            <div className="container flex flex-col justify-center items-center mx-auto e mt-5 lg:flex-row">
                                <div className="flex items-center  justify-center p-4 md:p-8 lg:p-12">
                                    <LazyLoad>
                                        <img
                                            src={recipe.image}
                                            alt=""
                                            className="rounded-lg shadow-lg"
                                        />
                                    </LazyLoad>
                                </div>

                                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                                    <h2 className="text-3xl font-semibold leading-none">
                                        {recipe.name}
                                    </h2>
                                    <p className="mt-4 mb-2  text-sm">
                                        <b>Description : </b>

                                        {recipe.description}
                                    </p>
                                    <p className="mt-2 mb-2  text-sm">
                                        <b>Review : </b>
                                        {recipe.review}
                                    </p>
                                    <div className="flex items-center md-2 space-x-2">
                                        <b>Rating : </b>
                                        {recipe.rating}
                                    </div>
                                    <button
                                        onClick={() => handleFav()}
                                        disabled={fav}
                                        className="self-start px-6 py-2 mt-5 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500  disabled:hover:bg-gradient-to-r disabled:hover:from-purple-500 disabled:hover:to-blue-400"
                                    >
                                        {`${
                                            fav
                                                ? "Already Added"
                                                : "Add to favorite"
                                        }`}
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
