import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splashscreen from './components/Splashpage/Splashscreen';
import './App.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<Splashscreen />} />
  </Routes>
);

export default App;
