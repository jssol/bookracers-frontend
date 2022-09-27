import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  motorcycle: '',
  error: '',
};

export const addmotor = createAsyncThunk('motorcycle/addmotor', (motorcycle) => axios
  .post(`${BASE_URL}add_motorcycle`, {
    motorcycle,
  },
  {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  })
  .then((response) => response.data));

const motorcycleSlice = createSlice({
  name: 'userAddMotor',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(addmotor.pending, (state) => {
      state.loading = true;
      state.motorcycle = {};
      state.error = '';
    });
    builder.addCase(addmotor.fulfilled, (state, action) => {
      state.loading = false;
      state.motorcycle = action.payload;
      state.error = '';
    });
    builder.addCase(addmotor.rejected, (state, action) => {
      state.loading = false;
      state.motorcycle = {};
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default motorcycleSlice.reducer;
