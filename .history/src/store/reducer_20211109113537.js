import { combineReducers } from "redux-immutable";


import { reducer as recommendReducer } from "../pages/discover/c-cpn/recommend/store";
import { reducer as toplistReducer } from "../pages/discover/c-cpn/toplist/store";
import {reducer as playListReducer} from "../pages/discover/c-cpn/playlist/store"
const cReducer = combineReducers({
    recommend: recommendReducer,
    toplist: toplistReducer,
    songList: songListReducer
})

export default cReducer