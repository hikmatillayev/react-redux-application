import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
  },

  reducers: {
    signUserStart: state => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.loggedIn = true
      state.isLoading = false
      state.user = action.payload
      setItem('token', action.payload.token)
    },
    signUserFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    logoutUser: state => {
      state.user = null
      state.loggedIn = false
    }
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, logoutUser } = authSlice.actions;
export default authSlice.reducer;
