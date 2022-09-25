import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Splashscreen from './components/home/Splashscreen';
import Register from './components/home/Register';
import NewLogin from './components/home/NewLogin';
import NewSignUp from './components/home/NewSignUp';
import CategoriesPage from './components/categories/CategoriesPage';
import MotorcycleList from './components/motorcycles/MotorcycleList';
import MotorcycleDetails from './components/motorcycles/MotorcycleDetails';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="register" element={<Register />}>
        <Route path="login" element={<NewLogin />} />
        <Route path="signup" element={<NewSignUp />} />
      </Route>
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:id" element={<MotorcycleList />} />
      <Route
        path="/categories/:id/motorcycles/:mid"
        element={<MotorcycleDetails />}
      />
    </Routes>
  </>
);

export default App;
