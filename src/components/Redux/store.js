import { createStore, applyMiddleware } from "redux";
import { partData } from "./reducer";
import logger from "redux-logger";

export const store = createStore(partData);

