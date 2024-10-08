import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room, RoomsState, User } from '../types/types';


const initialState: RoomsState = {
    rooms: [],
    currentUser: null,
    currentRoom: {
        id:'',
        name: '',
        maxCapacity: '',
        regularPrice: '',
        discount: '',
        description: '',
        image: '',
    },
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    getRooms: (state, action: PayloadAction<Room[]>) => {
      state.rooms = action.payload;
    },
    setCurrentRoom: (state, action: PayloadAction<Room>) => {
      state.currentRoom = action.payload;
    },
    getUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    }
  },
});

export const { getRooms, setCurrentRoom, getUser } = roomsSlice.actions;

export default roomsSlice.reducer;
