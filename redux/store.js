import { configureStore } from '@reduxjs/toolkit'
import sideMenuReducer from "./slices/sideMenu"

export const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer
  }
})