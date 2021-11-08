import { combineReducers } from "redux-immutable";


import { reducer as recommendReducer } from "../pages/discover/c-cpn/recommend/store";
import { reducer as topListReducer } from "../pages/discover/c-cpn/top";

const cReducer = combineReducers({
    recommend: recommendReducer
})

export default cReducer