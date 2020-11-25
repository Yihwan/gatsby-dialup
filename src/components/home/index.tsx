import React from 'react';

import Hero from './components/hero';
import HotNewsHeadlines from './components/hotNewsHeadlines';
import ValuePropositions from './components/valuePropositions';
import FeaturedActionCards from './components/featuredActionCards';
import NavMenu from './components/navMenu';

import * as Styled from './style';

const Home = () => (
  <Styled.Home>
    <Styled.MainContent>
      <Hero />
      <HotNewsHeadlines />
      <ValuePropositions />
      <FeaturedActionCards />
      <NavMenu />
    </Styled.MainContent>
  </Styled.Home>
);

export default Home;
