import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
