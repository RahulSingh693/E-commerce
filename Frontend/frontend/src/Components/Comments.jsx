import React from 'react';
import { Avatar, Box, Grid, Rating } from '@mui/material';

const Comments = () => {
  return (
    <div className=' p-2 rounded-md mb-4'>
        <Grid container gap={1}>
            <Grid items xs={1} >
                <Box>
                    <Avatar className='text-white' sx={{width:50,height:50,bgcolor:"#9154fd"}}> R</Avatar>
                </Box>
            </Grid>
            <Grid items xs={9}>
                <div className=' pl-1'>
                    <p className=' text-[1.1rem] font-semibold'>Rahul singh</p>
                    <p className='opacity-70'>May 29, 2024</p>
                </div >

                <Rating value={4.4} name='rating' precision={0.5} readOnly size='small' className='pl--1'/>
                <p>It was a great experience. Nice product to buy and worth the money.</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default Comments;