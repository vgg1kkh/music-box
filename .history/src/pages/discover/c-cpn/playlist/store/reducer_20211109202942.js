import { Map } from "immutable";

import {
  CHANGE_CATEGORY,
  CHANGE_CATEGORY_SONGS,
  CHANGE_CURRENT_CATEGORY,
} from "./constants";

const initialState = Map({
  category: [],
  currentCategory: "All",
  categorySongs: {},
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return state.set("category", action.payload);
    case CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.payload);
    case CHANGE_CATEGORY_SONGS:
      return state.set("categorySongs", action.payload);
    default:
      return state;
  }
};
