import {Map} from "immutable";
import 

const initialState =  Map({

})

const reducer = (state=initialState,action) => {
    switch(action.type){
        case CHANGE_TOPLIST_COUNT:
            return state.set('toplistInfo', action.toplistInfo)
        default: return state;
    }
}

export default reducer