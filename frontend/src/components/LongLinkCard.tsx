import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import CardWrapper from './CardWrapper';
import { postLink } from "@/app/actions";
import Button from '@mui/material/Button';

export default function LongLinkCard(){

  const longLinkContent = (
    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}} component="form" action={postLink}>
      <Typography variant="h2" sx={{userSelect: 'none'}}> Paste Your Link Below: </Typography>
      <TextField sx={{ 
        color: '#000', 
        mb: 4, 
        mt: 6,
        border: 1,}} 
        label="Enter URL Here"
        type="url" 
        variant="filled" 
        color="primary" 
        id="longLink"
        name="longLink"
        fullWidth 
        required
        />
      <Button sx={{ p: 2 }} type="submit" variant="contained" size="large">
        <Typography variant="h4">
          Get New URL
        </Typography>
      </Button>
    </CardContent>
  )

  return (
    <CardWrapper>
      {longLinkContent}
    </CardWrapper> 
  )
}