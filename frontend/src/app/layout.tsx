import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'
import Title from '@/components/Title';
import theme from '../theme';
import { Suspense } from "react";
import Loading from "./loading";
import SideNavigation from "@/components/SideNavigation";
import { getAllLinks } from "../app/actions";
import { headers } from "next/headers";
import { LinkType } from '@/app/lib/types';
import NavigationList from "@/components/NavigationList"

export const metadata: Metadata = {
  title: "LinkLeap",
  description: "Shorten your URLs with one easy click",
};


export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data : LinkType[] = await getAllLinks();
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component="main" sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '100vh',
              backgroundImage: "url(/background2.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}>
              <SideNavigation >
                <NavigationList data={data}/>
              </SideNavigation>
              <Title />
              <Suspense fallback={ <Loading /> }>
                {children}
              </Suspense>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
