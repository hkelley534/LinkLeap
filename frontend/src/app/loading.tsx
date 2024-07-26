import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: 5}}
    open={true}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  )
}