import { call, put, takeLatest } from "redux-saga/effects";
import { initData, setAllChannels } from "./channels";
import { getChannels } from "@/requests/claroVideo";
import { UpstreamEventsFormat } from "@/utils/utils";

function* initDataMiddleware(action) {
  try {
    const { msg, response } = yield call(getChannels, action?.payload);
    const channels = UpstreamEventsFormat(response?.channels);
    msg === "OK"
      ? yield put(setAllChannels(channels))
      : console.warn("ocurrio un error en un requets");
  } catch (error) {
    console.warn("ERRO", error);
  }
}

export function* channelsSaga() {
  yield takeLatest(initData?.type, initDataMiddleware);
}
