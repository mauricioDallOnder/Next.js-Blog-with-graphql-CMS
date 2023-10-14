import React, { ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';

type IIChildrenProps = {
    children: ReactNode;
}

const Layout = ({ children }:IIChildrenProps) => (
  <>
    <Header />
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  </>
);


export default Layout;