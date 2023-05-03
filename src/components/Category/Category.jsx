/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from "react";

const Category = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/category")
            .then((res) => res.json())
            .then((data) => setCategory(data));

        }, []);
console.log(category);
    return (
        <div className="container mx-auto mt-14">
        <div className="text-center">
            <h1 className="font-bold text-4xl mb-3">Job Category List</h1>
            
                {category[0]?.categorys?.map((category) => (
                <h1>{category?.title}</h1>
                ))}
               
        </div>
        <div className="container mx-auto mt-10">
            <ul className="flex-col md:flex-row px-10 md:px-0 md:flex md:justify-evenly">
    
            </ul>
        </div>
    </div>
    );
};

export default Category;