import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    firstName: string;
    lastName: string;
    email: string;
}

interface Room {
    name: string;
    maxCapacity: string;
    regularPrice: string;
    discount: string;
    description: string;
    image: string;
}

interface RoomsState {
    rooms: Room[];
    currentUser: User | null; 
    currentRoom: Room;
}

const initialState: RoomsState = {
    rooms: [],
    currentUser: null,
    currentRoom: {
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
