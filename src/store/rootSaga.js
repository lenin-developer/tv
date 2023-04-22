import { all } from "redux-saga/effects";
import { channelsSaga } from "./slices/channels/channelsSaga";

export function* rootSaga() {
  yield all([
    channelsSaga(),
    //... aqui todas los de mas sagas (middlewares)
  ]);
}
