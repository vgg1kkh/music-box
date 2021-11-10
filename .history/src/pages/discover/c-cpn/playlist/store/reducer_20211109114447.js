import {Map} from "immutable"

import { CHANGE_CATEGORY,CHAN } from "./constants"

const initialState = Map({
    category: [],
    currentCategory: "All",
    categorySongs: {}
})

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case

        default:return state
    }
}

