import {Map} from "immutable";
import { CHANGE_CURRENT_INDEX, CHANGE_TOPLIST_COUNT } from "./constants";

const initialState =  Map({
    toplistInfo: [],
    currentIndex: 0
})

const reducer = (state=initialState,action) => {
    switch(action.type){
        case CHANGE_TOPLIST_COUNT:
            return state.set('toplistInfo', action.payload)
        case CHANGE_CURRENT_INDEX:
            return state.set('',action.payload)
        default: return state;
    }
}

export default reducer