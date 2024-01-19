import { createSlice } from '@reduxjs/toolkit';
import * as API from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(API.register.pending, handlePending)
      .addCase(API.register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(API.register.rejected, handleRejected)
      .addCase(API.login.pending, handlePending)
      .addCase(API.login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(API.login.rejected, handleRejected)
      .addCase(API.logout.pending, handlePending)
      .addCase(API.logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(API.logout.rejected, handleRejected)
      .addCase(API.current.pending, handlePending)
      .addCase(API.current.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
