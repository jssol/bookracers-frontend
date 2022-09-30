import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Splashscreen from './components/home/Splashscreen';
import Register from './components/home/Register';
import NewLogin from './components/home/NewLogin';
import NewSignUp from './components/home/NewSignUp';
import CategoriesPage from './components/categories/CategoriesPage';
import MotorcycleList from './components/motorcycles/MotorcycleList';
import MotorcycleDetails from './components/motorcycles/MotorcycleDetails';
import AddCategory from './components/crud/AddCategory';
import MyReservations from './components/reservations/MyReservations';
import Reservation from './components/reservations/reservation';
import NotFoundPage from './components/shared/NotFoundPage';

const App = () => (
  <>
    <Routes>
      <Route path="/addcategory" element={<AddCategory />} />

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
      <Route path="/my_reservations" element={<MyReservations />} />
      <Route path="/categories/:id/motorcycles/:mid/reservation" element={<Reservation />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
