import { Grid } from '@mui/material';
import React from 'react';

const OrderCard = () => {
  return (
    <div className='w-full p-4 border border-gray-100 rounded-md shadow-sm cursor-pointer'>
        <Grid container justifyContent={"space-between"}>
          <Grid items xs={4}>
            <div className='w-full flex justify-around'>
                <img src='https://rukminim2.flixcart.com/image/224/224/xif0q/suitcase/6/s/r/-original-imagrk9sbqwzcfpg.jpeg?q=90'  
                  alt="product" className='h-[5rem] w-[4.5rem]'/>
                <div className='flex flex-col pl-4 gap-2 w-full'>
                    <p className=' w-full text-md font-medium text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis'>SAFARI ZENO 55 Cabin Suitcase 4 Wheels And</p>
                    <div>
                    <p className='text-[13px]  opacity-65'>Size: M</p>
                    <p className='text-[13px]  opacity-65'>Color: Blue</p>
                    </div>
                </div>
            </div>
          </Grid>
          <Grid items xs={3} >
            <div className='w-full flex justify-center'>
                <p className='text-md text-black'>&#8377;1,399</p>
            </div>
          </Grid>
          <Grid items xs={4.5}>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                    <p className='border-[2.5px] border-green-600 rounded-full h-[14px] w-[14px]'> </p>
                    <div className='flex items-start text-[1.05rem] font-semibold'>Expected Delivery by March 31</div>
                </div>
                <div className='text-sm pl-1 text-gray-900'>Your order has been placed.</div>
            </div>
          </Grid>
                
        </Grid>
    </div>
  );
}

export default OrderCard;