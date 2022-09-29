import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const reservation = createAsyncThunk(
  'reservation/reservation',
  async (reserve) => {
    const response = await axios.post(`${BASE_URL}api/v1/add_reservation`, reserve, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default reservation;
