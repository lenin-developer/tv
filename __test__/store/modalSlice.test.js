import {
  initialState,
  modalSlice,
  showModal,
} from "@/store/slices/modal/modal";

describe("Slice modal", () => {
  it("showModal deberia modificar el valor del STORE a true", () => {
    const store = modalSlice.reducer(initialState, showModal());
    expect(store?.show).toBe(true);
  });
});
