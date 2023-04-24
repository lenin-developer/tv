import {
  channelsSlice,
  setAllChannels,
  initialState,
} from "@/store/slices/channels/channels";
import { channesFetchRes } from "../mocks/mocks";

describe("slice channels", () => {
  it("setAllChannels deberia modificar la propiedad channels del STORE", () => {
    const store = channelsSlice.reducer(
      initialState,
      setAllChannels(channesFetchRes)
    );
    expect(store?.channels).toEqual(channesFetchRes);
  });
});
