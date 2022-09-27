import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  motorcycle: '',
  error: '',
};

export const delcat = createAsyncThunk('motorcycle/delcat', (motorcycle) => axios
  .post(`${BASE_URL}del_motorcycle`, {
    motorcycle,
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
