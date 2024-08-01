import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    minNight: 1,
    maxNight: 30,
    maxGuest: 10,
    breakfastPrice: 20,
  },
  reducers: {
    updateSetting: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateSetting } = settingsSlice.actions;

export default settingsSlice.reducer;
