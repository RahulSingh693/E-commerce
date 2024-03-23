import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';

const CartCard = () => {
  return (
    <div className="w-full bg-white border border-slate-100 flex p-3 gap-8 rounded-sm m-1">
      <div className=" lg:w-[8rem]  w-[5rem]">
        <img
          src="https://rukminim2.flixcart.com/image/224/224/xif0q/suitcase/6/s/r/-original-imagrk9sbqwzcfpg.jpeg?q=90"
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between ml-3">
        <div>
          <h1 className="text-lg font-semibold text-slate-800">
            SAFARI ZENO 55 Cabin Suitcase 4 Wheels - 22 inch
          </h1>
          <p className="text-sm text-slate-500 font-medium pt-2">Size: M, L</p>
          <p className="text-sm text-slate-500 font-medium pt-1">Seller:Wizrob Fashion</p>
        </div>

        <div className='pt-2'>
          <span className="text-[1rem] font-medium text-slate-500 line-through "> ₹8,999 </span>
          <span className="text-[1rem] font-semibold text-slate-800 ml-2"> ₹1,499 </span>
          <span className="text-[1rem] text-green-700 ml-2 font-medium"> 78% off </span>
          <div className="flex space-x-2 items-center mt-4">
            <Fab size='small' sx={{boxShadow:'none', bgcolor:"white", border:"1px solid #cecfd0"}}>
                <AddIcon />
            </Fab>
            <span className="text-lg px-6 font-medium py-1 border border-slate-200 rounded-sm">1</span>
            <Fab size='small' sx={{boxShadow:'none', bgcolor:"white", border:"1px solid #cecfd0"}}>
                <RemoveIcon />
            </Fab>
            <div className='lg:pl-10 pl-5'><Button  variant='outlined' sx={{fontWeight:"500", color:"#0f0f10", borderColor:"#cecfd0"}}>Remove</Button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;