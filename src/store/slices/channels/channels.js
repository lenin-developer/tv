import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: [],
  loading: false,
};

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    initData: (state) => {
      state.loading = true;
    },
    setAllChannels: (state, action) => {
      const { payload } = action;
      state.channels = payload;
      state.loading = false;
    },
  },
});

// Action creators are generated +for each case reducer function
export const { initData, setAllChannels } = channelsSlice.actions;

export default channelsSlice.reducer;
