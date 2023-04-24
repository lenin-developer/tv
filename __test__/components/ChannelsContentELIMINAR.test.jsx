import { render, screen, fireEvent } from "@testing-library/react";
import { initChannels } from "@/../__test__/mocks/mocks";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { channelsSlice } from "@/store/slices/channels/channels";
import { ChannelsContent } from "@/components";
// import { store } from "@/store/store";

let store = {};

describe("ChannelsContent", () => {
  beforeEach(() => {
    store = configureStore({
      reducer: {
        channels: channelsSlice.reducer,
      },
    });
  });

  // montamos el componente nuevo antes de cada test
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ChannelsContent />
      </Provider>
    );
  });

  it("deberia de renderizar los canales", () => {
    // screen.debug();
  });
});
