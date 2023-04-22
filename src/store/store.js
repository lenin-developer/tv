import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./slices/channels/channels";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    channels: channelsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
