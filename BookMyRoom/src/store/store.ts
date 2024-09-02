import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice';
import detailsSlice from './detailsSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    details: detailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
