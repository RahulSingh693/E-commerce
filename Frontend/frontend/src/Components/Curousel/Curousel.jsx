import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import data from './carouselData';

const items = data.map((item) => (
    <div key={item.id}>
        <img src={item.img} className="w-full cursor-pointer h-80 object-cover" alt={item.title} role='presentation'/>
    </div>
));

const Curousel = () => (
    <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
    />
);

export default Curousel;