import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splashscreen from './components/home/Splashscreen';
import Register from './components/home/Register';
import Login from './components/home/Login';
import Signup from './components/home/Signup';

const App = () => (
  <Routes>
    <Route path="/" element={<Splashscreen />} />
    <Route path="register" element={<Register />}>
      <Route index element={<Login />} />
      <Route path="sign_up" element={<Signup />} />
    </Route>
  </Routes>
);

export default App;
