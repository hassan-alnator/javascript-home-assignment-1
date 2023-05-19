import React from 'react';
import HeaderRow from './HeaderRow';
import ShorteningUrl from './ShorteningUrl';
import Statistics from './Statistics';
import BoostLinks from './BoostLinks';

function MainContent() {
  return (
    <main className="main">
        <HeaderRow />
        <ShorteningUrl />
        <Statistics />
        <BoostLinks />
      </main>
  );
}

export default MainContent;