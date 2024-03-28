import React from 'react'
import { Grid, LinearProgress } from '@mui/material'

const Ratings = ({name, vals, col}) => {
  return (
    <div>
      <Grid container gap={2} alignItems={"center"}>
        <Grid items xs={2}>{name}</Grid>
        <Grid items xs={7}>
          <LinearProgress color={col} variant="determinate" value={vals} sx={{bgcolor:"rgb(243 243 243)",borderRadius:5,height:7}}></LinearProgress>
        </Grid>
      </Grid>
    </div>
  )
}

export default Ratings;