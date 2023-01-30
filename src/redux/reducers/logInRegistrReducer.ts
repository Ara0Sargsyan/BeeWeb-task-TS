import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLogIn, fetchSignUp } from "../actionCreators/loginRegistrActions";

const initialState: IinitialState = {
  email: "",
  logined: false,
  error: "",
};

interface IinitialState {
  email: string;
  logined: boolean;
  error: string;
}

export const LoginRegistrSlice = createSlice({
  name: "loginRegistr",
  initialState,
  reducers: {
    logOut(state) {
      state.logined = false;
      state.email = "";
    },
    clearError(state) {
      state.error = ""
    }
  },
  extraReducers: {
    [fetchLogIn.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.logined = true;
      state.email = action.payload;
      state.error = "";
    },
    [fetchLogIn.rejected.type]: (state, action) => {
      state.logined = false;
      state.error = action.payload;
    },
    [fetchSignUp.fulfilled.type]: (state, action) => {
      state.logined = true;
      state.email = action.payload;
      state.error = "";
    },
    [fetchSignUp.rejected.type]: (state, action) => {
      state.logined = false;
      state.error = action.payload;
    },
  },
});

export default LoginRegistrSlice.reducer;
export const { logOut, clearError } = LoginRegistrSlice.actions;
