'use client';
import { Source_Code_Pro } from 'next/font/google';
import { Ubuntu } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const source_code_pro = Source_Code_Pro({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#88cc66',
      main: '#65b343',
      dark: '#3e8a30',
      contrastText: '#FFF'
    },
    secondary: {
      light: '',
      main: '#c1def9',
      dark: '#5187d9',
      contrastText: '#000'
    },
    info: {
      main: '#808080'
    }
  },
  typography: {
    fontFamily: ubuntu.style.fontFamily,
    h1: {
      fontFamily: source_code_pro.style.fontFamily,
      fontSize: '4.0em',
      // '@media (min-width:600px)': {
      //   fontSize: '4.0rem'
      // }
    },
    h2: {
      fontSize: '1.6rem'
    },
    h3: {
      fontSize: '1.4rem'
    },
    h4: {
      fontSize: '1.2rem'
    },    
    h5: {
      fontSize: '1.0rem'
    },
    body1: {
      fontSize: '0.8rem'
    },
    button: {
      textTransform: 'none'
    },
  },
}));

export default theme;
