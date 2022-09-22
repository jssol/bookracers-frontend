import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  user: {},
  error: '',
  authenticated: false,
};

export const signup = createAsyncThunk('user/signup', (credentials) => axios
  .post(`${BASE_URL}signup`, {
    user: credentials,
  })
  .then((response) => response.data));

const signupSlice = createSlice({
  name: 'userSignup',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.user = {};
      state.error = '';
      state.authenticated = false;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
      state.authenticated = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
      state.authenticated = false;
    });
  },
  /* eslint-enable */
});

export default signupSlice.reducer;
