import {Map} from "immutable"

import { CHANGE_CATEGORY,CHANGE_CATEGORY_SONGS,CHANGE_CURRENT_CATEGORY } from "./constants"

const initialState = Map({
    category: [],
    currentCategory: "All",
    categorySongs: {}
})

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_CATEGORY:
      return state.set("category", action.category);
    case CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory);
    case CHANGE_CATEGORY_SONGS:
      return state.set("categorySongs", action.categorySongs);

        default:return state
    }
}

