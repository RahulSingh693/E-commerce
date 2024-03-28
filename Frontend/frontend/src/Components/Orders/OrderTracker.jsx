import { Stepper, Step, StepLabel } from '@mui/material';
import React from 'react';

const steps = ['Order Placed', 'Order Confirmed', 'Order Shipped', 'Out of Delivery', 'Delivered'];

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel >{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
  )
}

export default OrderTracker;