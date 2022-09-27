import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  category: '',
  error: '',
};

export const delcat = createAsyncThunk('category/delcat', (category) => axios
  .delete(
    `${BASE_URL}del_category`,
    {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
      data: category,
    },
  )
  .then((response) => response.data));

const categorySlice = createSlice({
  name: 'userDelCat',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(delcat.pending, (state) => {
      state.loading = true;
      state.category = {};
      state.error = '';
    });
    builder.addCase(delcat.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
      state.error = '';
    });
    builder.addCase(delcat.rejected, (state, action) => {
      state.loading = false;
      state.category = {};
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default categorySlice.reducer;
