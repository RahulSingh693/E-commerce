import React from 'react'
import Curousel from '../../Components/Curousel/Curousel';
import { HomeCarousel } from '../../Components/HomeCard/HomeCarousel';

const HomePage = () => {
  return (
    <div className='w-full mt-0 bg-slate-50 box-border m-0 p-0'>
        <Curousel />
        <div className='mt-10'>
            <HomeCarousel />
        </div>
    </div>
  )
}

export default HomePage;
