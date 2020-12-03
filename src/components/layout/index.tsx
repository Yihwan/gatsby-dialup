import React from 'react';
import 'fontsource-eb-garamond';

import Header from 'components/header';
import Footer from 'components/footer';
// @ts-ignore
import SEO from 'components/seo.js';

import * as Styled from './style';
import './layout.css';

// @ts-ignore
const Layout = ({ seo, children }) => (
  <>
    <SEO {...seo}/>
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