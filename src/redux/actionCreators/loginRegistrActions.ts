import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

type thunkProps = {
  email: string,
  password: string;
}

export const fetchLogIn = createAsyncThunk(
  "fetch/login",
  async ({ email, password }: thunkProps, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response.user.email
    } catch (e) {
      return thunkAPI.rejectWithValue(e + "");
    }
  }
);

export const fetchSignUp = createAsyncThunk(
  "fetch/signUp",
  async ({email, password}: thunkProps, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      return response.user.email
    } catch (e) {
        return thunkAPI.rejectWithValue(e + "");
    }
  }
);
