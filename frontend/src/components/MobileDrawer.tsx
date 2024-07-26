"use client"

import * as React from 'react';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
const drawerWidth = 240;
const pages = [['HOME','/'],['ABOUT', '/about'], ['SPEAKING', '/speaking'], ['EVENTS', '/events'], ['CONTACT', '/contact'],  ];

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 
//  ADD HOVER EFFECTS ONTO PAGES BUTTONS, PAGE TITLE, AND BOOK BUTTON
//  
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export default function MobileDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const drawer = (
    <Container maxWidth="lg" sx={{ display: 'flex', height: "100%", bgcolor: "primary.main"}}>
      <Box sx={{ pl: '25px' }}>
        <IconButton
          aria-label="close drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ color: "#FFF", padding: '0px', pt: '15px' }}
        >
        <CloseIcon sx={{ fontSize: 40}} />
        </IconButton>
      </Box>

      <List sx={{ textAlign: 'center', pt: '75px' }}>
        {pages.map(([item, path]) => (
          <ListItem key={item} disablePadding >
            <ListItemButton href={path} sx={{ textAlign: 'left', pl: '0' }}>
              <Typography fontSize={20} color='#FFF' >
                {item}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );

  return(
    <Box>
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { md: 'none' }, color: "#FFF" }}
      >
        <MenuIcon sx={{ fontSize: 40}}/>
      </IconButton>

      <Drawer
        anchor={'left'}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}