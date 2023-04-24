import {
  initialState,
  previewSlice,
  previewEvent,
} from "@/store/slices/preview/preview";
import { dataPreview } from "../mocks/mocks";

describe("Slice preview", () => {
  it("deberia poder ", () => {
    const store = previewSlice.reducer(initialState, previewEvent(dataPreview));
    expect(store?.data).toEqual(dataPreview);
  });
});
