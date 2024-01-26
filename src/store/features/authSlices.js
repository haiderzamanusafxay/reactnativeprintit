import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = true;
    },
    setAuthenticatedFalse: (state, action) => {
      state.isAuthenticated = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSignupData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setUser,
  setToken,
  logout,
  setAuthenticated,
  setAuthenticatedFalse,
} = authSlice.actions;
export default authSlice.reducer;
