import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import LoginButton from './LoginButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { LinkType } from '@/app/lib/types';
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import NavigationList from './NavigationList';

export default function NavigationListWrapper(
  { data } : { data : LinkType[] }
){
<Box mx={3}>
  {data ? 
  // If there is data
  <NavigationList data={data}/>
  :
  // If there is no data
  <Box pt={25} display={'flex'} justifyContent={'center'} >
    <Typography variant='h4'>
      You have no links!
    </Typography>
  </Box>}
</Box>
}