import { createSlice } from '@reduxjs/toolkit';

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    // filteredRooms: [],
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
      // state.filteredRooms = action.payload; 
    },
    // setFilteredRooms: (state, action) => {
    //   state.filteredRooms = action.payload;
    // },
    // setSortedRooms: (state, action) => {
    //   state.filteredRooms = action.payload;
    // },
    setCurrentRoom: (state, action) => {
      state.currentRoom = action.payload;
    },
  },
});

export const { getRooms,  setCurrentRoom } = roomsSlice.actions;

export default roomsSlice.reducer;
