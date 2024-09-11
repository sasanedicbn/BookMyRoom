import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice';
import detailsSlice from './detailsSlice';
import bookingsSlice from './bookingsSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    details: detailsSlice,
    bookings: bookingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
