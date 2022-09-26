import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const myReservations = createAsyncThunk(
  'myreservations/myreservations',
  async (user) => {
    const response = await axios.get('http://localhost:3001/api/v1/reservations', user, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default myReservations;
