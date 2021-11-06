import { CHANGE_BANNER } from "./constants"

const initialState = {
banners: []
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_BANNER:
           return ({
               banners:[ ...action.payload]
           })

        default:return state

    }
}


export default reducer