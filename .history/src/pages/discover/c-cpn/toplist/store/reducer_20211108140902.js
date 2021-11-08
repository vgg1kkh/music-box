import { Map } from "immutable";
import {
  CHANGE_CURRENT_INDEX,
  CHANGE_TOPLIST_COUNT,
  CHANGE_CURRENT_TOPLIST_ID,
  CHANGE_CURRENT_TOPLIST
} from "./constants";

const initialState = Map({
  toplistInfo: [],
  currentIndex: 0,
  currentToplistId: 19723756,
  currentToplistTitleInfo: {},
  currentToplist: []

});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOPLIST_COUNT:
      return state.set("toplistInfo", action.payload);
    case CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.payload);
    case CHANGE_CURRENT_TOPLIST_ID:
      return state.set("currentToplistId", action.payload);
    case CHANGE_CURRENT_TOPLIST:
        return state.set('currentToplist', action.payload)
        case actionTypes.CHANGE_CURRENT_TOPLIST_TITLE_INFO:
            return state.set('currentToplistTitleInfo', action.titleInfo)
    default:
      return state;
  }
};

export default reducer;
