import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Event } from "@/components";
import { events } from "../mocks/mocks";

const mockuseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockuseDispatch,
}));

describe("componente Event", () => {
  it("deberi de renderizar los datos del evento", () => {
    const tituloEventMock = events[0]?.name;

    render(
      <Provider store={store}>
        <Event events={events} />
      </Provider>
    );

    const tituloEvent = screen.getByText(tituloEventMock);
    expect(tituloEvent.innerHTML).toBe(tituloEventMock);
  });
});
