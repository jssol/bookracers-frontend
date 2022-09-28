import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const newotorcycle = createAsyncThunk(
  'createmotorcycle/createmotorcycle',
  async (resource) => {
    const response = await axios.post('http://localhost:3001/api/v1/add_motorcycle', { motorcycle: resource }, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default newotorcycle;
