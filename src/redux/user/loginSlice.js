import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  user: '',
  error: '',
  authenticated: false,
};

const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const login = createAsyncThunk('user/login', (user) => axios
  .post(`${BASE_URL}login`, {
    user,
  })
  .then((response) => {
    setToken(response.data.jwt);
    return response.data;
  }));

const userSlice = createSlice({
  name: 'userLogin',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.user = {};
      state.error = '';
      state.authenticated = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
      state.authenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
      state.authenticated = false;
    });
  },
  /* eslint-enable */
});

export default userSlice.reducer;
