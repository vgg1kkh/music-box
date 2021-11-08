import {Map} from "immutable";
import { CHANGE_TOPLIST_COUNT } from "./constants";

const initialState =  Map({
    toplistInfo: [],
    currentIndex: 0
})

const reducer = (state=initialState,action) => {
    switch(action.type){
        case CHANGE_TOPLIST_COUNT:
            return state.set('toplistInfo', action.payload)
        case CHANGE_
        default: return state;
    }
}

export default reducer