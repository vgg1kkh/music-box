import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhences = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = 