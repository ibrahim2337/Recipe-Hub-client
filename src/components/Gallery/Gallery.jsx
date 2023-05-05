/* eslint-disable no-unused-vars */
import React from "react";

const Gallery = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <section className="">
      <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl ">
            Our Recipes Gallery
          </h1>

          
        <div className="container flex flex-col justify-center p-4 mx-auto ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/vBghN2X/pork-rhubarb-chops-400x400-5cfa5bd.webp"
            />
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/nDnC8V6/green-breakfast-smoothie-f89d590.webp"
            />
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/QkpvvKJ/Hash-with-eggs-26ad895.webp"
            />
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/QYyRTSC/Carrot-and-grains-salad-5d5ce72.webp"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 my-5 ">
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/LztfcnT/kidney-bean-curry-f8e0b17.webp"
            />
            <img
              className="object-cover w-full aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/6DCPrsz/chicken-pasta-bake-06fe2d6.webp"
            />
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/KVNCzLb/satay-sweet-potato-curry-17cc62d.webp"
            />
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/xCQKrPZ/recipe-image-legacy-id-1274503-8-05ae02b.webp "
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/wzHHkf7/Easy-lentil-curry-15e688f.webp"
            />
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/CMCfxm6/Masala-spatchcock-chicken-2bfc2da.webp"
            />
            <img
              className="object-cover w-full  aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/j35FCVG/Vegetarian-chilli-206c469.webp"
            />
            <img
              className="object-cover w-full aspect-square rounded-xl hover:scale-90"
              src="https://i.ibb.co/swsnbF7/spiced-apple-blackberry-hand-pies-15f720a.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
