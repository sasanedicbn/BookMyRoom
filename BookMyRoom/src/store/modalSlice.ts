import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  isEditModalOpen: false,
  currentRoom: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.currentRoom = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.currentRoom = null;
    },
    openEditModal: (state) => {
      state.isEditModalOpen = true;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
    },
  },
});

export const { openModal, closeModal, openEditModal, closeEditModal } = modalsSlice.actions;

export default modalsSlice.reducer;
