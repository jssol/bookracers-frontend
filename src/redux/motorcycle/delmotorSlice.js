import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  loading: false,
  motorcycle: '',
  error: '',
};

export const delcat = createAsyncThunk('motorcycle/delcat', (motorcycle) => axios
  .delete(`${BASE_URL}api/v1/del_motorcycle`, {
    motorcycle,
  }, {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  })
  .then((response) => response.data));

const motorcycleSlice = createSlice({
  name: 'userDelMotor',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(delcat.pending, (state) => {
      state.loading = true;
      state.motorcycle = {};
      state.error = '';
    });
    builder.addCase(delcat.fulfilled, (state, action) => {
      state.loading = false;
      state.motorcycle = action.payload;
      state.error = '';
    });
    builder.addCase(delcat.rejected, (state, action) => {
      state.loading = false;
      state.motorcycle = {};
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default motorcycleSlice.reducer;
