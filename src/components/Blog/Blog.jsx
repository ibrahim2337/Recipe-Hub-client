/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <section className="mt-20">
      <div className="container px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl text-center font-bold sm:text-4xl">
          Welcome To Blog
        </h2>
        <p className="mt-4 mb-8 "></p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
            Tell us the differences between uncontrolled and controlled components.
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
             ................{" "}
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
            How to validate React props using PropTypes
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
             ................{" "}
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
            Tell us the difference between nodejs and express js.
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
             ................{" "}
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
            What is a custom hook, and why will you create a custom hook?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
             ................{" "}
            </p>
          </details>


        </div>
      </div>
    </section>

    //
  );
};

export default Blog;
