import React from 'react';

import Hero from './components/hero';
import HotNewsHeadlines from './components/hotNewsHeadlines';
import ValuePropositions from './components/valuePropositions';
import ActionCards from './components/actionCards';
import NavMenu from './components/navMenu';
import Footer from './components/footer';

import * as Styled from './style';

const Home = () => (
  <Styled.Home>
    <Styled.MainContent>
      <Hero />
      <HotNewsHeadlines />
      <ValuePropositions />
      <ActionCards />
      <NavMenu />
      <Footer />
    </Styled.MainContent>
  </Styled.Home>
);

export default Home;
