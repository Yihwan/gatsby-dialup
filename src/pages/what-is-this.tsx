import React from 'react';

import Layout from 'components/layout';
import { Typography } from 'consts';

const AboutPage = () => (
  <Layout>
    <Typography.Heading>What is this?</Typography.Heading>

    <Typography.Paragraph>
       	It's my entry for the Gatsby Silly Site Challenge. But why, you ask?
    </Typography.Paragraph>

    <Typography.Title>What was old is new (sort of)</Typography.Title>

    <Typography.Paragraph>
       	In the beginning, web sites were static.
    </Typography.Paragraph>
  </Layout>
);

export default AboutPage; 