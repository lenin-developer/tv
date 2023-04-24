import {
  UpstreamEventsFormat,
  getOrdenEvent,
  formatHr,
  formatHr30,
  formatFront,
} from "@/utils/utils";
import { channesFetchRes } from "../mocks/mocks";

describe("funciones de utileria", () => {
  it("deberia de retornar un obj con el valor numerico de una horario en string", () => {
    const horaDeinicio = "2021/08/12 20:02:56";
    const num = getOrdenEvent(horaDeinicio);
    expect(num).toEqual({ orderEvet: 20 });
  });

  it("debera de ordenar los eventos de forma ascendente", () => {
    const channel = UpstreamEventsFormat(channesFetchRes);
    const { events } = channel[0];

    expect(events[0]?.unix_begin).toBe(1);
    expect(events[1]?.unix_begin).toBe(2);
  });

  it("deberi de modificar el formato 20 -> 20:00hr.", () => {
    const newFormat = formatHr(20);
    expect(newFormat).toBe("20.00hs.");
  });

  it("deberia de modificar el formato 20 -> 20:30hr.", () => {
    const newFormat = formatHr30(20);
    expect(newFormat).toBe("20.30hs.");
  });

  it("ds", () => {
    const date1 = "2021/08/12 20:02:56";
    const date2 = "2021/08/12 21:02:56";
    const newformat = formatFront(date1, date2);
    expect(newformat).toBe("20:02:56 - 21:02:56");
  });
});
