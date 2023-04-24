export const getOrdenEvent = (hrStart) => {
  const subStrin1 = hrStart?.split(" ");
  const horaStart = subStrin1[1];
  const orderEvet = parseFloat(horaStart);
  return { orderEvet };
};

export const UpstreamEventsFormat = (channels) => {
  let Adata = {};
  let Bdata = {};
  const copiChannels = channels?.map((channel) => {
    const { id, number, name, image } = channel;

    const newFormatEvet = channel?.events?.map((evet, index) => {
      const meta = {
        unix_begin: evet?.unix_begin,
        date_begin: evet?.date_begin,
        date_end: evet?.date_end,
        duration: evet?.duration,
        title: `${name} - ${index}`,
        img: image,
      };
      return meta;
    });

    const ordenEvetns = newFormatEvet?.sort((a, b) => {
      Adata = getOrdenEvent(a?.date_begin);
      Bdata = getOrdenEvent(b?.date_begin);

      return Adata?.orderEvet - Bdata?.orderEvet;
    });

    const newchannel = {
      ...channel,
      events: ordenEvetns,
      key: `${id}${number}`,
    };
    return newchannel;
  });

  return copiChannels;
};

export const formatHr = (hr) => {
  const horaImpunto = `${hr}.00hs.`;
  return horaImpunto;
};

export const formatHr30 = (hr) => {
  const horaImpunto = `${hr}.30hs.`;
  return horaImpunto;
};

export const formatFront = (hr1, hr2) => {
  const subStrin1 = hr1?.split(" ");
  const subStrin2 = hr2?.split(" ");
  const horaStart1 = subStrin1[1];
  const horaStart2 = subStrin2[1];
  const horaImpunto = `${horaStart1} - ${horaStart2}`;
  return horaImpunto;
};
