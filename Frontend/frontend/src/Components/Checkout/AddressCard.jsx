import { Radio, RadioGroup } from '@mui/material';
import React from 'react';

const AddressCard = ({item}) => {
  return (
    <div>
        <RadioGroup>
            <div className='flex items-start p-2 w-full'>
            <Radio size='small' />
            <div className='flex flex-col gap-1 w-full'>
                <div className='text-lg font-semibold'>Rahul singh</div>
                <div className='text-md'>Longowal, sangrur, punjab, 148106</div>
                <div className='text-md'>9124037620</div>
            </div>
        </div>
        </RadioGroup>
    </div>
  )
}

export default AddressCard;