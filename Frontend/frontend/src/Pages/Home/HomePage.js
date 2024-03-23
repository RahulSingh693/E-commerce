import React from "react";
import Curousel from "../../Components/Curousel/Curousel";
import HomeCarousel from "../../Components/HomeCard/HomeCarousel";
import { kurtaPage1 } from "../../Data/Kurta/kurta";
import { mens_kurta } from "../../Data/Men/men_kurta";
import {mensPantsPage1} from "../../Data/pants/men_page1";

const HomePage = () => {
  return (
    <div className="w-full mt-0 bg-slate-50 box-border m-0 p-0">
      <Curousel />
      <div className="mt-10 flex flex-col gap-8">
        <HomeCarousel data={kurtaPage1} id={1} title={"Women's Trendy Kurti"}/>
        <HomeCarousel data={mens_kurta} id={2} title={"Men's new kurta"}/>
        <HomeCarousel data={mensPantsPage1} id={3} title={"Trending jeans collection"}/>
        {/* <HomeCarousel data={mens_kurta} />
        <HomeCarousel data={mens_kurta} />
        <HomeCarousel data={mens_kurta} /> */}
      </div>
    </div>
  );
};

export default HomePage;
