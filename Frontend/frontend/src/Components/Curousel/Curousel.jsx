import React, { useEffect } from "react";
import data from "./carouselData";
import Glide from "@glidejs/glide";
import SlideButtons from "./SlideButtons";

const Curousel = () => {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 2000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-02 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {data.map((item) => (
              <div key={item.id}>
                <img
                  src={item.img}
                  className="w-full cursor-pointer h-80 object-cover"
                  alt={item.title}
                  role="presentation"
                />
              </div>
            ))}
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <SlideButtons totalSlides={4} />
        </div>
      </div>
    </>
  );
};

export default Curousel;
