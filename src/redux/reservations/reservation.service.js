import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const reservation = createAsyncThunk(
  'reservation/reservation',
  async (reserve) => {
    const response = await axios.post('http://localhost:3001/api/v1/add_reservation', reserve, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default reservation;
