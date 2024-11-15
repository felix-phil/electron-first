import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
// import { musicApi } from "./services/music";

const store = configureStore({
  reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }).concat([
//       musicApi.middleware,
//     ]),
});
export default store;
