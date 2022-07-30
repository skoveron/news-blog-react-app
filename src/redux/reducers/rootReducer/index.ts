import { combineReducers } from "@reduxjs/toolkit";
import { articlesReducer } from "../articles";
const rootReducer = combineReducers({
  articles: articlesReducer,
});
export default rootReducer;
