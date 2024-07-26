import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import MobileDrawer from './MobileDrawer';
import LoginButton from './LoginButton';

export default function TopNavigation() {

  return(
        <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'end', py: {xs: '5px', md: '25px'}, px: {xs: '0px', md: '10px'}}}> 
            <MobileDrawer />


            <LoginButton />
        </Container>
  )
}