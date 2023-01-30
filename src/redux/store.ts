import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginRegistrReducer from './reducers/logInRegistrReducer'
import textBlocksReducer from "./reducers/textBlocksReducer";


const rootReducer = combineReducers({
  loginRegistrReducer, 
  textBlocksReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]

