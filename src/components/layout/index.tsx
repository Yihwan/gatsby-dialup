import React from 'react';
import 'fontsource-eb-garamond';

import Header from 'components/header';
import Footer from 'components/footer';

import * as Styled from './style';
import './layout.css';

// import SEO from 'components/seo';

// @ts-ignore
const Layout = ({ children }) => (
  <>
    <Styled.Layout>
      <main>
        {children}
      </main>
      <Header />
      <Footer />
    </Styled.Layout>
  </>
);

export default Layout; 