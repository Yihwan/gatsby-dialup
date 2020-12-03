import React from 'react';

import Layout from 'components/layout';
import Home from 'components/home';

const HomePage = () => (
  <Layout
    seo={{
      title: 'Welcome',
    }}
  >
    <Home />
  </Layout>
);

export default HomePage;
