import { call, put, takeLatest } from "redux-saga/effects";
import { initData, setAllChannels } from "./channels";
import { getChannels } from "@/requests/claroVideo";

function* initDataMiddleware(action) {
  console.log("middleware");
  try {
    const { msg, response } = yield call(getChannels, action?.payload);
    msg === "OK"
      ? yield put(setAllChannels(response?.channels))
      : console.warn("ocurrio un error en un requets");
  } catch (error) {
    console.warn("ERRO", error);
  }
}

export function* channelsSaga() {
  yield takeLatest(initData?.type, initDataMiddleware);
}
