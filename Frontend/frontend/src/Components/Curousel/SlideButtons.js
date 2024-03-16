import React from 'react';

const SlideButtons = ({ totalSlides }) => {
  return (
    <>
      {[...Array(totalSlides)].map((_, index) => (
        <button
          key={index}
          className="group p-4"
          data-glide-dir={`=${index}`}
          aria-label={`goto slide ${index + 1}`}
        >
          <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
        </button>
      ))}
    </>
  );
};

export default SlideButtons;