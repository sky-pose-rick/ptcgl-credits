import React from 'react';
import {
  HashRouter, Route, Routes,
} from 'react-router-dom';
import Pricer from './components/Pricer';

// use hash router locally with '/#/' before the normal url
// eg. http://localhost:3000/#/ptcgl-credits/sell
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route
            path="/ptcgl-credits/merger"
            element={<div>TODO</div>}
          />
          <Route
            path="/ptcgl-credits/sell"
            element={<Pricer selling />}
          />
          <Route
            path="/ptcgl-credits"
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
