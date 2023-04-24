import { render, screen } from "@testing-library/react";
import { HoursLine } from "@/components";

describe("componente HoursLine", () => {
  it("deberi de renderizar las horas", () => {
    const hora0 = "00.00hs.";
    const hora23 = "23.30hs.";
    render(<HoursLine />);

    const txt1 = screen.getByText(hora0);
    const txt2 = screen.getByText(hora23);

    expect(txt1).toBeInTheDocument();
    expect(txt2).toBeInTheDocument();
  });
});
