import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item, key}) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${19}`)} id={key} className="w-64 h-[26rem] font-sans border border-grey-50 flex flex-col justify-start items-start py-1 px-2 cursor-pointer hover:shadow-md rounded-sm">
      <div className="w-full h-[70%]">
        <img
          src={item.image}
          className="object-cover object-top h-full w-full select-none"
          alt="img"
        />
      </div>

      <div className="w-full overflow-hidden hover:-translate-y-5 bg-white transition-all ease-out duration-300">
        <div className="text-[14.5px] font-semibold text-gray-500 mt-1">
          {item.brand}
        </div>
        <p className="line-clamp-2 text-[14px] overflow-hidden w-full">
          {item.title}
        </p>
        <p className="text-[14px] text-slate-700 mt-[2px]">{item.color}</p>
        <div className="flex items-center mt-1">
          <span className="text-[1rem] font-semibold text-slate-800">₹{item.discountedPrice}</span>
          <span className="text-[14px] font-medium text-slate-700 line-through ml-2">
            ₹{item.price}
          </span>
          <span className="text-[13.5px] text-green-700 ml-2 font-medium">
            {item.discountPersent}% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
