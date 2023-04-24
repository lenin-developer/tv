import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: {
    title: "Claro-Video",
    hr: "12:00hr - 12:00rhs",
    description: "loren loren",
  },
};

export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    previewEvent: (state, action) => {
      const { payload } = action;
      state.data = payload;
    },
  },
});

// Action creators are generated +for each case reducer function
export const { previewEvent } = previewSlice.actions;

export default previewSlice.reducer;
