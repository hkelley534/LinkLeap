import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Stack from '@mui/material/Stack'
import CardWrapper from './CardWrapper';
import Link from '@mui/material/Link';



export default function LoadingCard(){
  const loadingContent = (
    <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column',  }}>
      <Typography variant="h2" sx={{userSelect: 'none'}}> Your New Link: </Typography>

      <Stack sx={{ alignItems: 'center', justifyItems: 'center'}} marginTop={6} spacing={4}>
        <Box bgcolor={'#F0F0F0'} display={'flex'} alignItems={'center'} border={1} borderRadius={1.5}>
          <Typography px={2} variant="h5"> {} </Typography>

          <Button color='secondary' variant={'contained'} sx={{ py: 2, borderBottomLeftRadius: 0, borderTopLeftRadius : 0, borderLeft: 2 }}>
            <ContentCopyIcon />
          </Button>
        </Box>

        <Button sx={{ p: 2,  }} href="/" size="large" variant="contained">
          <Typography variant="h4">
            Enter Another URL
          </Typography>
        </Button>
        
        <Box textAlign={'center'}>
          <Link href='#' color='secondary.dark' variant="h4">
            View My Links
          </Link>
        </Box>
      </Stack>
    </CardContent>
  )

  return(
    <div>
      <CardWrapper>
        {loadingContent}
      </CardWrapper>
    </div>
  )
}