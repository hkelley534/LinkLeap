"use client"
import * as React from 'react';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import Stack from '@mui/material/Stack'
import CardWrapper from './CardWrapper';
import Link from '@mui/material/Link';
import { LinkType } from '@/app/lib/types';


export default function ShortLinkCard( { props } : { props: LinkType }){
  const [open, setOpen] = React.useState(false);
  const shortLink = "https://localhost:7233/api/" + props.shortUrl;
  const longLink = props.longUrl;

  const handleClick = () => {
    navigator.clipboard.writeText(shortLink ? shortLink : "");
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
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const shortLinkContent = (
    <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column',  }}>
      <Typography variant="h2" sx={{userSelect: 'none'}}> Your New Link: </Typography>

      <Stack sx={{ alignItems: 'center', justifyItems: 'center'}} marginTop={3} spacing={4}>
        <Box p={2} bgcolor={'#F0F0F0'} display={'flex'} alignItems={'center'} border={1} borderRadius={1.5}>
          <Typography px={2} variant="h5"> {shortLink} </Typography>
        </Box>
        
        <Stack flexDirection={'row'} useFlexGap spacing={2}>
          <Button color='secondary' variant={'contained'} onClick={handleClick} >
              <ContentCopyRoundedIcon />
            <Typography pl={1} variant="h5"> Copy </Typography>
          </Button>

          <Button color='secondary' variant={'contained'} href={`${longLink}`} target={'_blank'}>
              <ArrowOutwardRoundedIcon />
            <Typography pl={1} variant="h5"> Visit </Typography>
          </Button>
        </Stack>

        <Button sx={{ py: 2, px: 6 }} href="/" size="large" variant="contained">
          <Typography variant="h4">
            Enter Another URL
          </Typography>
        </Button>
      </Stack>
    </CardContent>
  )

  return(
    <div>
      <CardWrapper>
        {shortLinkContent}
      </CardWrapper>
      <Snackbar
      open={open}
      autoHideDuration={2400}
      onClose={handleClose}
      message="Link Copied"
      action={action}
      anchorOrigin={{ horizontal: 'center', vertical: 'top'}}
      />
    </div>
  )
}