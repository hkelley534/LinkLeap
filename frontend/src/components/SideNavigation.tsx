"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import LoginButton from './LoginButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { LinkType } from '@/app/lib/types';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import NavigationListWrapper from './NavigationListWrapper';

const drawerWidth = 500;

export default function SideNavigation(
  { children }: React.PropsWithChildren<{}>) {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  
  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setIsClosing(true);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setDrawerOpen(!drawerOpen);
    }
  };

  const drawer = (
    <Box >
      <AppBar position={'sticky'} sx={{ bgcolor: 'white' }} >
        <Toolbar sx={{ py: 3, display: 'flex', justifyContent: 'center',} }>
          <Box display={'flex'} justifyContent={'start'} width={'33%'}>
            <IconButton href={'/'}>
              <HomeOutlinedIcon color='info' fontSize='large'/>
            </IconButton>
          </Box>
          <Box display={'flex'} justifyContent={'center'} width={'33%'}>
            {/* <LoginButton /> */}
          </Box>
          <Box display={'flex'} justifyContent={'end'} width={'33%'}>
            <IconButton onClick={handleDrawerToggle}>
              <ArrowBackIcon color='info' fontSize='large'/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );

  return (
    <Box width={'100%'} sx={{ display: 'flex' }}>
      <Box 
        component="nav"
      > 
        {/* Navigation */}
        <Box maxWidth={drawerWidth} zIndex={-1}>
          <Toolbar sx={{ py: 3, display: 'flex', justifyContent: 'center'}}>
            <Box display={'flex'} justifyContent={'start'} pr={4}>
              <IconButton href={'/'}>
                <HomeOutlinedIcon color='primary' fontSize='large'/>
              </IconButton>
            </Box>
            
            <Box display={'flex'} justifyContent={'start'} flexGrow={1}>
              <IconButton color='primary' onClick={handleDrawerToggle}>
                <ArrowForwardIcon fontSize='large'/>
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
        {/* Mobile Drawer */}
        <Drawer 
          open={drawerOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
        {/* Desktop Drawer */}
        <Drawer
          variant="persistent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open={true ? !drawerOpen : drawerOpen}
          onClose={handleDrawerClose}
          onTransitionEnd={handleDrawerTransitionEnd}
        >
          {drawer}
        </Drawer>
    </Box>
  </Box>
  );
}
