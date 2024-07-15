import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEditModalOpen: false,
  currentRoom: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
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
