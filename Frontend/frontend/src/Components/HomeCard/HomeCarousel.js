import React from "react";
import HomeCards from "./HomeCards";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import EastIcon from "@mui/icons-material/East";

export const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [1, 1, 1, 1, 1, 1, 1, 1].map((items) => {
    return <HomeCards />;
  });

  const responsive = {
    0: { items: 1 },
    720: { items: 4 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  return (
    <div className="w-full px-3  relative">
      <div className="relative w-[99%] mx-auto">
        <AliceCarousel
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />
      </div>
      { activeIndex !== items.length-5 && <button
        className="absolute bg-white p-2 rounded-full top-1/2 right-1 transform -translate-y-1/2 shadow-lg h-16 w-16
       hover:bg-slate-100" onClick={slideNext}
      >
        <EastIcon sx={{ fontSize: 30 }} />
      </button>}
      { activeIndex !== 0 && <button
        className="absolute bg-white p-2 rounded-full top-1/2 left-1 transform -translate-y-1/2 shadow-lg h-16 w-16
      hover:bg-slate-100" onClick={slidePrev}
      >
        <EastIcon sx={{ fontSize: 30 }} className=" transform: rotate-180 " />
      </button>}
    </div>
  );
};
