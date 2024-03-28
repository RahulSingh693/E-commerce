import React, { useState } from 'react';
import AddressCard from './AddressCard';
import { Button, Divider, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DeliveryAddress = () => {
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname: e.target.Firstname.value,
      lastname: e.target.Lastname.value,
      address: e.target.Address.value,
      city: e.target.City.value,
      state: e.target['State/Province/Region'].value,
      phone: e.target.Phone.value
    }
    setData(data);
    navigate("/checkout?step=2");
  }

  const navigate = useNavigate();
    const handleClick = () => {
        navigate("/checkout?step=2");
    }

  return (
    <div className='flex flex-col gap-4 items-center lg:px-10 px-5 '>
      {/* Saved Delivery address */}
        <div className='border border-slate-200 w-full rounded-sm pb-2'>
          <AddressCard item={data} />
          <div className='w-1/6 ml-11'>
            <Button onClick={handleClick} type='submit' variant="contained" sx={{height:"100%", backgroundColor: "#150202",color: "#fff","&:hover": { backgroundColor: "#150202",boxShadow:"none"}}}className="w-full bg-slate-800 text-white py-2 my-4 rounded-sm hover:bg-slate-700">Deliver Here</Button>
          </div>
        </div>
        <div className='border border-slate-200 w-full rounded-sm pb-2'>
          <AddressCard item={data} />
          <div className='w-1/6 ml-11'>
            <Button onClick={handleClick} type='submit' variant="contained" sx={{height:"100%", backgroundColor: "#150202",color: "#fff","&:hover": { backgroundColor: "#150202",boxShadow:"none"}}}className="w-full bg-slate-800 text-white py-2 my-4 rounded-sm hover:bg-slate-700">Deliver Here</Button>
          </div>
        </div>

        <Divider className='w-full text-md'>OR</Divider>

      {/* Add new delivery address form */}
        <div className='flex flex-col w-full border border-slate-100 rounded-md'>
          <div className='w-full font-semibold text-2xl text-slate-800 py-3  px-5'>Add New Delivery Address</div>
          <form onSubmit={handleSubmit} className='w-[90%] mx-auto pt-2 flex flex-col gap-6'>
            <div className='w-full flex justify-between'>
              <div className='w-[90%] lg:w-5/12'><TextField  required id='Firstname' name='Firstname' label="First Name" fullWidth   autoComplete='given-name'/></div>
              <div className='w-[90%] lg:w-5/12'><TextField  required id='Lastname' name='Lastname' label="Last Name" fullWidth   autoComplete='given-name'/></div>
            </div>
            <div className=' w-full'><TextField  required id='Address' name='Address' label="Delivery address" fullWidth multiline rows={4}  autoComplete='given-name'/></div>
            <div className='w-full flex justify-between'>
              <div className='w-[90%] lg:w-5/12'><TextField  required id='City' name='City' label="City" fullWidth   autoComplete='given-name'/></div>
              <div className='w-[90%] lg:w-5/12'><TextField  required id='State/Province/Region' name='State/Province/Region' label="State/Province/Region" fullWidth   autoComplete='given-name'/></div>
            </div>
            <div className='w-full flex justify-between'>
              <div className='w-[90%] lg:w-5/12'><TextField  required id='Zip/Postal code' name='Zip/Postal code' label="Zip/Postal code" fullWidth   autoComplete='shipping postal-code'/></div>
              <div className='w-[90%] lg:w-5/12'><TextField  required id='Phone' name='Phone' label="Phone Number" fullWidth   autoComplete=''/></div>
            </div>

            <div className=' w-1/3 h-14 mb-9 mt-2'><Button  type='submit' variant="contained" sx={{height:"100%", backgroundColor: "#150202",color: "#fff","&:hover": { backgroundColor: "#150202",boxShadow:"none"}}}
                    className="w-full bg-slate-800 text-white py-2 my-4 rounded-sm hover:bg-slate-700">Deliver Here</Button></div>
          </form>
        </div>
    </div>
  )
}

export default DeliveryAddress;
