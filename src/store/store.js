import { configureStore } from '@reduxjs/toolkit'
import DrawerSlice from './features/DrawerSlice'
import authSlice from './features/authSlices'
export const store = configureStore({
  reducer: {
    drawer: DrawerSlice,
    auth: authSlice,
  },
})

