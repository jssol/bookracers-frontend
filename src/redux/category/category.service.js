import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createCategory = createAsyncThunk(
  'category/category',
  async (cat) => {
    const response = await axios.post('http://localhost:3001/api/v1/add_category', cat, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    const res = await response.data;
    return res;
  },
);

export default createCategory;
