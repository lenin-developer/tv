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
    const newChannel = { ...channel };
    const newFormatEvet = newChannel?.events?.sort((a, b) => {
      Adata = getOrdenEvent(a?.date_begin);
      Bdata = getOrdenEvent(b?.date_begin);

      return Adata?.orderEvet - Bdata?.orderEvet;
    });

    const newchannel = { ...channel, events: newFormatEvet };
    return newchannel;
  });

  return copiChannels;
};
