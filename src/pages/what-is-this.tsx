import React from 'react';

import Layout from 'components/layout';
import { Typography } from 'consts';

const AboutPage = () => (
  <Layout>
    <Typography.Heading>What is this?</Typography.Heading>

    <Typography.Paragraph>
       	It's my entry for the{' '}
      <a 
        href="https://www.gatsbyjs.com/silly-site-challenge/"
        target="_blank"
        rel="noopener noreferrer"
      >
          Gatsby Silly Site Challenge
      </a>. But why, you ask?
    </Typography.Paragraph>

    <Typography.Title>What was old is new (sort of)</Typography.Title>

    <Typography.Paragraph>
      In the beginning, all web sites were static. You typed up some some text, 
      stuck a note on your computer warning{' '}"
      <a 
        href="https://home.cern/science/computing/birth-web/short-history-web"
        target="_blank"
        rel="noopener noreferrer"
      >
        This machine is a server. DO NOT POWER IT DOWN!!
      </a>", and boom — you were on the World Wide Web!
    </Typography.Paragraph>

    <Typography.Paragraph>
      We've come a long way since then. But in some ways, we've also come full circle. 
    </Typography.Paragraph>

    <Typography.Paragraph>
      Newer tools like{' '}
      <a 
        href="https://gatsbyjs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>,{' '}
      <a 
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Next
      </a>,{' '}
      <a 
        href="https://gohugo.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hugo
      </a>,{' '}
      and many more generate the same kind of HTML files that powered the early web. There's 
      some fancy new stuff too of course, but the goal remains the same: empower a new generation of thinkers, 
      creators, and builders to share their ideas with the world.
    </Typography.Paragraph>

    <Typography.Paragraph>
      Feel free to check out the{' '}
      <a 
        href="https://github.com/Yihwan/gatsby-dialup"
        target="_blank"
        rel="noopener noreferrer"
      >
        source code
      </a> for this site or{' '}
      <a 
        href="https://yihwan.kim/"
        target="_blank"
        rel="noopener noreferrer"
      >
        say hello
      </a>. I'm looking forward to whatever comes next!
    </Typography.Paragraph>
  </Layout>
);

export default AboutPage; 