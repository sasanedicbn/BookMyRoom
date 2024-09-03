import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DetailsState {
  details: BookingDetails | null;
  currentBtns: string[];
  priceForBreakfast: number;
  hasBreakfast: boolean;
}

const initialState: DetailsState = {
  details: null,
  currentBtns: [],
  priceForBreakfast: 0,
  hasBreakfast: false,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails(state, action: PayloadAction<BookingDetails>) {
      state.details = action.payload;
      state.hasBreakfast = action.payload.hasBreakfast;
    },
    clearDetails(state) {
      state.details = null;
      state.currentBtns = [];
      state.priceForBreakfast = 0;
      state.hasBreakfast = false;
    },
    setCurrentBtns(state, action: PayloadAction<string[]>) {
      state.currentBtns = action.payload;
    },
    setPriceForBreakfast(state, action: PayloadAction<number>) {
      state.priceForBreakfast = action.payload;
    },
    setHasBreakfast(state, action: PayloadAction<boolean>) {
      state.hasBreakfast = action.payload;
    },
    setisPaid(state, action: PayloadAction<boolean>) {
      if (state.details) {
        state.details.isPaid = action.payload;
      }
    }
  }
});

export const { setDetails, clearDetails, setCurrentBtns, setPriceForBreakfast, setHasBreakfast, setisPaid } = detailsSlice.actions;

export default detailsSlice.reducer;
