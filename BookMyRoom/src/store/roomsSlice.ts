import { createSlice } from '@reduxjs/toolkit';

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    currentUser:{},
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
      state.rooms = action.payload;
    },
    setCurrentRoom: (state, action) => {
      state.currentRoom = action.payload;
    },
    getUser(state, action){
      state.currentUser = action.payload
    }
  },
});

export const { getRooms,  setCurrentRoom, getUser} = roomsSlice.actions;

export default roomsSlice.reducer;
