import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { showModal } from "@/store/slices/modal/modal";
import { store } from "@/store/store";

import { PreViewEvent } from "@/components";

const mockuseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockuseDispatch,
}));

describe("compoente  PreViewEvent", () => {
  beforeEach(() => jest.clearAllMocks());

  beforeEach(() => {
    render(
      <Provider store={store}>
        <PreViewEvent />
      </Provider>
    );
  });

  it("deberia cambiar invocar el dispatch con showModal", () => {
    const btn = screen.getByText("X");
    fireEvent.click(btn);
    expect(mockuseDispatch).toHaveBeenCalledWith(showModal());
  });

  it("debria de mostar el titulo de Claro-Video por defecto", () => {
    const tutle = screen.getByText("Claro-Video");
    expect(tutle).toBeInTheDocument();
  });
});
