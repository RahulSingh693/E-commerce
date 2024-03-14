import React from "react";

const HomeCards = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center rounded-sm overflow-hidden mx-5 mb-2 shadow-lg w-[15rem] bg-white">
      <div className="w-[90%] h-[18rem]">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/v/g/u/s-r-stbrg-stoneberg-original-imaghf7mfydfgfxg.jpeg?q=70"
          alt="First"
          className="object-cover h-full w-full object-top pt-1"
        />
      </div>
      <div className="flex flex-col items-left p-4 w-[95%]">
        <h1 className="text-lg font-medium text-gray-900">STONEBERG</h1>
        <p className="text-sm text-slate-800">Men Slim Fit Solid Spread Collar Formal Shirt</p>
      </div>
    </div>
  );
};

export default HomeCards;
