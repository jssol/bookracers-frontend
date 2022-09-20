import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splashscreen from './components/Splashpage/Splashscreen';
import './App.scss';
import CategoriesPage from './components/Categories/CategoriesPage';
import MotorcycleList from './components/Motorcycles/MotorcycleList';
import MotorcycleDetails from './components/Motorcycles/MotorcycleDetails';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:id" element={<MotorcycleList />} />
      <Route path="/categories/:id/motorcycles/:id" element={<MotorcycleDetails />} />
    </Routes>
  </>
);

export default App;
