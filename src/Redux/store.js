import { createStore } from "redux";
import bookTrackerReducer from "./Reducers/bookTrackerReducer";
export const store= createStore(bookTrackerReducer)
