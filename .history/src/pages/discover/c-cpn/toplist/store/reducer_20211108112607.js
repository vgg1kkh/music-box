import {Map} from "immutable";
import { CHANGE_TOPLIST_COUNT } from "./constants";

const initialState =  Map({
    toplistInfo: [],
    curr
})

const reducer = (state=initialState,action) => {
    switch(action.type){
        case CHANGE_TOPLIST_COUNT:
            return state.set('toplistInfo', action.payload)
        default: return state;
    }
}

export default reducer