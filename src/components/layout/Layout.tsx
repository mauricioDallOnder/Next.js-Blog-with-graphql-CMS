import React, { ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import { ChakraProvider } from '@chakra-ui/react';
import GoogleAnalytics from '../Analytics/GoogleAnalytics';
import CookieConsentBanner from '../CookieBanner';

type IIChildrenProps = {
    children: ReactNode;
}

const Layout = ({ children }:IIChildrenProps) => (
 <ChakraProvider>
    <Header />
    <GoogleAnalytics GA_MEASUREMENT_ID={'G-P2EFLF0D9F'} />
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {children}
        <CookieConsentBanner/>
      </div>
      <Footer />
    </div>
    </ChakraProvider>
);


export default Layout;