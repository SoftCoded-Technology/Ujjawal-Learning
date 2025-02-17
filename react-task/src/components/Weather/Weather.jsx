import React from 'react'
import { Typography } from '@mui/material'
import { useGetWeathersQuery } from '../../features/Weather/weatherSlice'

const Weather = () => {


    // const {data} = useGetWeathersQuery();
    // console.log(data);

  return (
    <>
        <Typography
        variant='h2'>
            Weather
        </Typography>
    </>
  )
}

export default Weather