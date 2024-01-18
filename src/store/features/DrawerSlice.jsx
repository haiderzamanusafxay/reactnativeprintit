import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const DrawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    show: state => {
      state.value = true;
    },
    hide: state => {
      state.value = false;
    },
  },
});
export const {show, hide} = DrawerSlice.actions;

export default DrawerSlice.reducer;
