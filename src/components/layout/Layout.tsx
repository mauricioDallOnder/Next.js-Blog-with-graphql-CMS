import React, { ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import { ChakraProvider } from '@chakra-ui/react';

type IIChildrenProps = {
    children: ReactNode;
}

const Layout = ({ children }:IIChildrenProps) => (
 <ChakraProvider>
    <Header />
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
    </ChakraProvider>
);


export default Layout;