import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
    bookings: [],
};

export const roomsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings: (state, action) => {
        state.bookings = action.payload
    }
   
  },
});

export const { setBookings } = roomsSlice.actions;

export default roomsSlice.reducer;
