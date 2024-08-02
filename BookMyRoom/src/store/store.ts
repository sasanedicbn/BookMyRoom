

import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice';
import settingsSlice from './settingsSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    settings: settingsSlice,
  },
});
