import { initChannels } from "@/../__test__/mocks/mocks";
import { ChannelItem } from "@/components";
import { render, screen } from "@testing-library/react";

describe("ChannelsContent", () => {
  beforeEach(() => {
    render(<ChannelItem channel={initChannels?.channels[0]} />);
  });

  it("deberia de renderizar los datos del canal", () => {
    const nunCanal = screen?.getByText("1");
    expect(nunCanal).toBeInTheDocument();
  });
});
