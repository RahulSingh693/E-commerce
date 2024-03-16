import React from "react";

const HomeCards = ({index, image, title, brand}) => {
  return (
    <div key={index} className="cursor-pointer flex flex-col items-center rounded-sm overflow-hidden mx-5 mb-2 hover:shadow-md hover:shadow-slate-100 w-[15rem] bg-white
    border border-gray-100">
      <div className="w-[90%] h-[18rem]">
        <img
          src={image}
          alt="First"
          className="object-cover h-full w-full object-top pt-1"
        />
      </div>
      <div className="flex flex-col items-left p-4 w-[95%]">
        <h1 className=" text-xl font-medium text-gray-900">{brand}</h1>
        <p className="text-sm text-slate-800 text-ellipsis overflow-hidden">{title}</p>
      </div>
    </div>
  );
};

export default HomeCards;