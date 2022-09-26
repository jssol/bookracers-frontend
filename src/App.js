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
import AddCategory from './components/crud/AddCategory';
import DelCategory from './components/crud/DelCategory';
import AddMotorcycle from './components/crud/AddMotorcycle';
import DelMotorcycle from './components/crud/DelMotorcycle';

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
      <Route path="/add_category" element={<AddCategory />} />
      <Route path="/del_category" element={<DelCategory />} />
      <Route path="/add_motorcycle" element={<AddMotorcycle />} />
      <Route path="/del_motorcycle" element={<DelMotorcycle />} />
    </Routes>
  </>
);

export default App;
