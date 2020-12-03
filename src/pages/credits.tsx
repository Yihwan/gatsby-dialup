import React from 'react';

import Layout from 'components/layout';
import { Typography } from 'consts';

const CreditsPage = () => (
  <Layout
    seo={{
      title: 'Credits',
    }}
  >
    <Typography.Heading>Credits</Typography.Heading>

    <Typography.Title>Site Design</Typography.Title>
    <Typography.Paragraph>
      This site's layout and design were inspired by Apple's home page from{' '}
      <a 
        href="http://web.archive.org/web/19980509035420/http://www.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        1998
      </a> and back when the iPod (remember those?) had a{' '}
      <a 
        href="http://web.archive.org/web/20011023204537/http://www.apple.com:80/"
        target="_blank"
        rel="noopener noreferrer"
      >
        moving mechanical wheel
      </a>. I realized that the three-pane gallery would accommodate AOL's{' '}
      <a 
        href="https://www.youtube.com/watch?v=D1UY7eDRXrs"
        target="_blank"
        rel="noopener noreferrer"
      >
        classic dial-up sequence
      </a>{' '} 
      nicely and decided to run with it. "You've Got Mail!" and the "Running Man" logo are 
      registered trademarks of whoever owns AOL nowadays.
    </Typography.Paragraph>

    <Typography.Title>Magic?</Typography.Title>
    <Typography.Paragraph>
      The magic that awaits after finally connecting to dial-up 
      seeks to capture the serendipity of{' '}
      <a 
        href="http://cachemonet.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        cachemonet.com
      </a>, originally created by{' '}
      <a 
        href="http://www.timnolan.info/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tim Nolan
      </a>,{' '}
      <a 
        href="https://collabwith.jen.lu/cachemonet/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jen Lu
      </a>, and{' '}
      <a 
        href="http://www.lassekorsgaard.com/projects/cachemonet"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lasse Korsgaard
      </a>. 
      It hearkens back to an Internet that wasn't so commercialized and predictable — 
      one that felt more unexpected and delightfully weird.
    </Typography.Paragraph>

    <Typography.Title>Gatsby Galaxy</Typography.Title>
    <Typography.Paragraph>
      The icon orbit on the home page is a (bad) CSS-in-JS implementation of{' '} 
      <a 
        href="https://stackoverflow.com/a/12817454/12604026"
        target="_blank"
        rel="noopener noreferrer"
      >
        this Stack Overflow response
      </a>.{' '}
      Icons are from the{' '}
      <a 
        href="https://www.macintoshrepository.org/software_search.php?c=128&stid=4&p=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Macintosh Repository
      </a>.
    </Typography.Paragraph>
  </Layout>
);

export default CreditsPage;