'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LoginButton(props:any) {
  return (
    <Button href="/contact" variant='contained' size='large' sx={{ px: {xs: '8px', md: '32px'} }}>
      <Typography sx={{fontSize: { xs: props.xsText ? props.xsText : '0.8rem', md: props.mdText ? props.mdText : '1.1rem'} }} >
        Login
      </Typography>
   </Button> 
  )
}