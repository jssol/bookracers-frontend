import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  loading: false,
  category: '',
  error: '',
};

export const addcat = createAsyncThunk('category/addcat', async (category) => {
  const response = await axios.post(`${BASE_URL}api/v1/add_category`, category, {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
  return response.data;
});

const categorySlice = createSlice({
  name: 'userAddCat',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(addcat.pending, (state) => {
      state.loading = true;
      state.category = {};
      state.error = '';
    });
    builder.addCase(addcat.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
      state.error = '';
    });
    builder.addCase(addcat.rejected, (state, action) => {
      state.loading = false;
      state.category = {};
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default categorySlice.reducer;
