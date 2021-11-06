import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import cReducer from "./reducer";

const composeEnhences = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(cReducer,)