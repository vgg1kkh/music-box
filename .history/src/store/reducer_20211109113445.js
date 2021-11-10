import { combineReducers } from "redux-immutable";


import { reducer as recommendReducer } from "../pages/discover/c-cpn/recommend/store";
import { reducer as toplistReducer } from "../pages/discover/c-cpn/toplist/store";
import {reducer as songListReducer} from "../p"
const cReducer = combineReducers({
    recommend: recommendReducer,
    toplist: toplistReducer,
    songList: 
})

export default cReducer