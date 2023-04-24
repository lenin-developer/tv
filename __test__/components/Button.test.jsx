import { Button } from "@/components";
import { screen, fireEvent, render } from "@testing-library/react";

describe("Button", () => {
  it("deberia de invocar a la funcion al hacer click", () => {
    const funMock = jest.fn();
    render(<Button lable="btn" onClick={funMock} />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(funMock).toHaveBeenCalledTimes(1);
  });
});
