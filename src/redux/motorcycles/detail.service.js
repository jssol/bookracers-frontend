import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const motorDetail = createAsyncThunk(
  'motor/motor',
  async (id) => {
    const response = await axios.get(`http://localhost:3001/api/v1/motorcycles/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default motorDetail;
