import * as React from 'react';
import Card from '@mui/material/Card';

export default function CardWrapper( { children }: React.PropsWithChildren<{}> ){
  return(
    <Card sx={{ 
      border: 1,
      borderRadius: 6,
      borderColor: 'secondary.light',
      minWidth: {xs: '35rem', sm: '40rem', md: '50rem'}, 
      py: 6,  
      px: 12,
      }}>
        {children}
    </Card>
  )
}