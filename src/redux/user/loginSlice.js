import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  loading: false,
  user: '',
  error: '',
  authenticated: false,
};

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const loggedIntUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const setAdmin = (details) => {
  localStorage.setItem('isAdmin', details);
};

export const login = createAsyncThunk('user/login', (user) => axios
  .post(`${BASE_URL}api/v1/login`, {
    user,
  })
  .then((response) => {
    setAdmin(response.data.user.admin);
    setToken(response.data.jwt);
    loggedIntUser(response.data.user.id);
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
