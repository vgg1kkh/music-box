import { Map } from "immutable";
import {
  CHANGE_CURRENT_INDEX,
  CHANGE_TOPLIST_COUNT,
  CHANGE_CURRENT_TOPLIST_ID,
} from "./constants";

const initialState = Map({
  toplistInfo: [],
  currentIndex: 0,
  currentToplistId: 19723756,
  
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOPLIST_COUNT:
      return state.set("toplistInfo", action.payload);
    case CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.payload);
    case CHANGE_CURRENT_TOPLIST_ID:
      return state.set("currentToplistId", action.payload);
    default:
      return state;
  }
};

export default reducer;
