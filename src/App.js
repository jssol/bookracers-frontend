import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splashscreen from './components/home/Splashscreen';
import Register from './components/home/Register';
import Login from './components/home/Login';
import Signup from './components/home/Signup';
import CategoriesPage from './components/categories/CategoriesPage';
import MotorcycleList from './components/motorcycles/MotorcycleList';
import MotorcycleDetails from './components/motorcycles/MotorcycleDetails';

const App = () => (
  <Routes>
    <Route path="/" element={<Splashscreen />} />
    <Route path="register" element={<Register />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/categories/:id" element={<MotorcycleList />} />
    <Route path="/categories/:id/motorcycles/:id" element={<MotorcycleDetails />} />
  </Routes>
);

export default App;
