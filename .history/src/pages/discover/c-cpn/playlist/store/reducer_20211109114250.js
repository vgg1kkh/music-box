import {Map} from "immutable"

const initialState = Map({
    currentCategory:[]
})

export const reducer = (state=initialState,action)=>{
    switch(action.type){

        default:return state
    }
}

