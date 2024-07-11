

import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './roomsSlice';
import modalSlice from './modalSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    modals: modalSlice,
  },
});
