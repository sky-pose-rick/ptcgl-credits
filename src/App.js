import React from 'react';
import {
  HashRouter, Route, Routes,
} from 'react-router-dom';
import Pricer from './components/Pricer';

// use hash router locally with '/#/' before the normal url
// eg. http://localhost:3000/#/ptcgl-credits/sell
function App() {
  return (
    <HashRouter basename="/ptcgl-credits">
      <div className="App">
        <Routes>
          <Route
            path="/merger"
            element={<div>TODO</div>}
          />
          <Route
            path="/sell"
            element={<Pricer selling />}
          />
          <Route
            path="/"
            element={<Pricer />}
          />
          <Route
            path="*"
            element={<Pricer />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
