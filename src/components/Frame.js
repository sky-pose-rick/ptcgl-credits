import React from 'react';
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';
import Normalizer from './Normalizer';
import Pricer from './Pricer';

// use hash router locally with '/#/' before the normal url
// eg. http://localhost:3000/#/ptcgl-credits/sell
function Frame() {
  return (
    <div className="Frame">
      <HashRouter>
        <header>
          <nav>
            <Link to="/">Crafting Calculator</Link>
            <Link to="/sell">Selling Calculator</Link>
            <Link to="/normalizer">Import Simplifier</Link>
            <a href="https://github.com/sky-pose-rick/ptcgl-credits" target="_blank" rel="noreferrer">Source Code</a>
          </nav>
          <h1>PTCGL Deck Pricer</h1>
        </header>
        <Routes>
          <Route
            path="/merger"
            element={<div>TODO</div>}
          />
          <Route
            path="/normalizer"
            element={<Normalizer />}
          />
          <Route
            path="/sell"
            element={<Pricer selling />}
          />
          <Route
            path="*"
            element={<Pricer />}
          />
        </Routes>
        <footer>
          Last updated April 23, 2023. Card searching provided by
          {' '}
          <a href="https://pokemontcg.io/">pokemontcg.io</a>
        </footer>
      </HashRouter>
    </div>
  );
}

export default Frame;
