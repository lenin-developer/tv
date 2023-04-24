import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  show: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = !state.show;
    },
  },
});

// Action creators are generated +for each case reducer function
export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
