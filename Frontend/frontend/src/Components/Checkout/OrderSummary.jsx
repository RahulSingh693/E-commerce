import React from 'react';
import AddressCard from './AddressCard';
import CartCard from "../CartCard";
import Button from '@mui/material/Button';

const OrderSummary = () => {
  return (
    <div className='flex flex-col bg-white'>
        <div className='border border-slate-200 px-2 py-4 rounded-md'><AddressCard /></div>


        <div className=' grid grid-cols-3 space-x-6 py-10'>
        <div className=' col-span-2'>
            {[1,2,3].map((item) =>  <CartCard key={item} />)}
        </div>

        <div className=' col-span-1 py-1'>
            <div className='bg-white p-5 rounded-md border border-slate-100'>
                <h1 className='text-lg font-semibold text-slate-700 pb-1'>PRICE DETAILS</h1>
                <div className='border border-dashed border-slate-200 my-2'></div>
                <div className='flex justify-between pt-4'>
                    <h1 className='text-base font-medium text-slate-800'>Price (6 items)</h1>
                    <h1 className='text-base font-medium text-slate-800'>₹8,994</h1>
                </div>
                <div className='flex justify-between pt-4'>
                    <h1 className='text-base font-medium text-slate-800'>Discount</h1>
                    <h1 className='text-base font-medium text-green-600'>- ₹2,994</h1>
                </div>
                <div className='flex justify-between pt-4'>
                    <h1 className='text-base font-medium text-slate-800'>Delivery Charges</h1>
                    <h1 className='text-base font-medium text-green-600'>₹40</h1>
                </div>
                <div className='border border-dashed border-slate-200 mt-4'></div>
                <div className='flex justify-between pt-4'>
                    <h1 className='text-lg font-semibold text-slate-800'>Total Amount</h1>
                    <h1 className='text-base font-bold text-slate-800'>₹6,040</h1>
                </div>
                <div className='pt-5'>
                <Button variant="contained" sx={{backgroundColor: "#150202",color: "#fff","&:hover": { backgroundColor: "#150202",boxShadow:"none"}}}
                    className="w-full bg-slate-800 text-white py-2 my-4 rounded-sm hover:bg-slate-700">Place Order</Button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default OrderSummary;