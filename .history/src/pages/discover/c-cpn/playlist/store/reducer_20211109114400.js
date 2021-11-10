import {Map} from "immutable"

const initialState = Map({
    category: [],
    currentCategory: "全部",
    categorySongs: {}
})

export const reducer = (state=initialState,action)=>{
    switch(action.type){

        default:return state
    }
}

