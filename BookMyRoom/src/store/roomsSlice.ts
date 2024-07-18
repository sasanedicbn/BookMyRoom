
import { createSlice } from '@reduxjs/toolkit';

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
   rooms: [],
   currentRoom: {
      name: '',
      maxCapacity: '',
      regularPrice: '',
      discount: '',
      description: '',
      image: '',
   },
  },
  reducers: {
    getRooms: (state, action) => {
        state.rooms = action.payload
    },
    singleRoom: (state,action) => {
      state.currentRoom = action.payload
    }
  },
});

export const { getRooms, singleRoom } = roomsSlice.actions;

export default roomsSlice.reducer;
