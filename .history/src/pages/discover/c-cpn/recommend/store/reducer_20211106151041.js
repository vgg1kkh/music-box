import { CHANGE_TOP_BANNER } from "./constants"

const initialState = {
banners: []
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_TOP_BANNER:
           return [...state.banners, ...payload]

        default:return state

    }
}


export default reducer