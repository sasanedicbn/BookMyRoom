import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    bookings: [],
};

export const roomsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings: (state, action) => {
        state.bookings = action.payload
    },
    // cleanBookings: (state, action) => {
    //     state.bookings = []
    // },

  },
});

export const { setBookings } = roomsSlice.actions;

export default roomsSlice.reducer;
