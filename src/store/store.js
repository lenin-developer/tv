import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./slices/channels/channels";
import previewReducer from "./slices/preview/preview";
import modalducer from "./slices/modal/modal";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    channels: channelsReducer,
    preview: previewReducer,
    modal: modalducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
