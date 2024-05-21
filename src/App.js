import './App.css';
import React from 'react';
import Home from './pages/Home';
import Snowboards from './pages/Snowboards';
import Bindings from './pages/Bindings';
import Boots from './pages/Boots';
import Clothes from './pages/Clothes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // probe
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snowboards" element={<Snowboards />} />
          <Route path="/bindings" element={<Bindings />} />
          <Route path="/boots" element={<Boots />} />
          <Route path="/clothes" element={<Clothes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;