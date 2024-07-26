'use client'

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { LinkType } from '@/app/lib/types';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import SortIcon from '@mui/icons-material/Sort';
import { useEffect } from 'react';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import LinkItem from './LinkItem';

export default function Redirect( { data }: {data: LinkType[] }) {
  const [sortedData, setSortedData] = React.useState(data.sort((a, b) => new Date(b.timeCreated).getTime() - new Date(a.timeCreated).getTime()));
  const [open, setOpen] = React.useState(false);



  const sortData = (filter : string) => {
    var newData = [...sortedData]
    switch(filter){
      case 'clicks':
        newData.sort((a, b) => b.clicks - a.clicks);
        break;
      case 'createdOn':
        newData.sort((a, b) => new Date(b.timeCreated).getTime() - new Date(a.timeCreated).getTime());
        break;
      case 'lastUsed':
        newData.sort((a, b) => new Date(b.lastAccessed).getTime() - new Date(a.lastAccessed).getTime());
        break;
    }
    setSortedData(newData)
  }

  const invertList = () => {
    var newData = [...sortedData]
    newData.reverse()
    setSortedData(newData)
  }

  const handleClick = (link: string) => {
    navigator.clipboard.writeText(`https://www.linkleap.org/${link}`);
    setOpen(true);
  };
  
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const list = (
    <List>
      {sortedData.map((link : LinkType) => (
        <Box key={link.id}>
          <Box py={3} display={'flex'} alignItems={'center'}>
            <ListItem disablePadding disableGutters>
              {/* <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
                <ListItemText>
                  <Stack useFlexGap spacing={1.5}>
                    <Typography variant={'body1'} flexGrow={1}>
                      Created on: {new Date(link.timeCreated).toLocaleDateString()}
                    </Typography>    
                    <Stack useFlexGap spacing={0.5}>
                      <Typography fontWeight='bold' variant='h5'>
                        {`localhost:3000/${link.shortUrl}`}
                      </Typography>
                      <Typography color='primary' variant='body1'>
                        {link.longUrl}
                      </Typography>
                    </Stack>
                    <Box display={'flex'}>
                      <Typography flexGrow={1} variant={'body1'}>
                        Last used on: {new Date(link.lastAccessed).toLocaleDateString()}
                      </Typography>
                      <Typography pr={2} variant={'body1'}>
                        Clicks: {link.clicks}
                      </Typography>
                    </Box>
                  </Stack>
                </ListItemText>
              </Box> */}
              <LinkItem />
              <Stack pl={2} justifyContent={'end'} useFlexGap spacing={3}>
                <Button color='secondary' variant={'contained'} onClick={() => handleClick(link.shortUrl)}>
                    <ContentCopyRoundedIcon />
                  <Typography pl={1} variant="h5"> Copy </Typography>
                </Button>

                <Button color='secondary' variant={'contained'} href={`${link.longUrl}`} target={'_blank'}>
                    <ArrowOutwardRoundedIcon />
                  <Typography pl={1} variant="h5"> Visit </Typography>
                </Button>
              </Stack>
            </ListItem>
          </Box>
          <Divider component="li"/>
        </Box>

      ))}
      {/* Copy Snackbar */}
      </List>
  )

  return(
    <Box mx={3}>
      <Box  mt={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography textAlign={'start'} variant={'h2'} flexGrow={1}>
        Your Links -  {data ? data.length : "0"}
        </Typography>
        <Box display={'flex'} justifyContent={'end'} alignItems={'center'} flexGrow={1}>
          <IconButton onClick={invertList}>
            <SwapVertIcon fontSize='inherit'/>
          </IconButton>
          <Button variant={'text'} onClick={() => sortData('lastUsed')}>
            <Typography variant={'h4'}>
              Sort By
            </Typography>
          </Button>
        </Box>
      </Box>

      {data ? 
      // If there is data
      list
      :
      // If there is no data
      <Box pt={25} display={'flex'} justifyContent={'center'} >
        <Typography variant='h4'>
          You have no links!
        </Typography>
      </Box>}
      <Snackbar
      open={open}
      autoHideDuration={2400}
      onClose={handleClose}
      message="Link Copied"
      action={action}
      anchorOrigin={{ horizontal: 'center', vertical: 'top'}}
      />
    </Box>
  )
}