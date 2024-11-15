import { combineReducers } from "@reduxjs/toolkit";
import { musicApi } from "./services/music";

const rootReducer = combineReducers({
  music: musicApi.reducer,
});
export default rootReducer;
