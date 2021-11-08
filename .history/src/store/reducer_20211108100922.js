import { combineReducers } from "redux-immutable";


import { reducer as recommendReducer } from "../pages/discover/c-cpn/recommend/store";
import { reducer as toplistReducer } from "../pages/discover/c-cpn/toplist/store";

const cReducer = combineReducers({
    recommend: recommendReducer,
    toplist: topistReducer,
})

export default cReducer