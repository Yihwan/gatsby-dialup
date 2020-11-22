import React from 'react';
import SEO from 'src/components/seo';

import Layout from 'src/components/layout';
import Home from 'src/components/home';

const HomePage = () => (
  <Layout>
    <SEO title="Y5" />
    <Home />
  </Layout>
)

export default HomePage;
