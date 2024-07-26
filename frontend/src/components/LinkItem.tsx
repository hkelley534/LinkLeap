import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LinkType } from "@/app/lib/types";

export default function LinkItem( link: LinkType ) {
  return(
    <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
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
  </Box>
  )
}