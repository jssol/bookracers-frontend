import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const newotorcycle = createAsyncThunk(
  'createmotorcycle/createmotorcycle',
  async (resource) => {
    const response = await axios.post(`${BASE_URL}api/v1/add_motorcycle`, resource, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default newotorcycle;
