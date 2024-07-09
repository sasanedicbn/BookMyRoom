// features/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
   rooms: []
  },
  reducers: {
    getRooms: (state, action) => {
        state.rooms = action.payload
    }
  },
});

export const { getRooms, } = roomsSlice.actions;

export default roomsSlice.reducer;
