

import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
  },
});
