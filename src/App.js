import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Pricer from './components/Pricer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/ptcgl-credits/merger"
            element={<div>TODO</div>}
          />
          <Route
            path="*"
            element={<Pricer />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
