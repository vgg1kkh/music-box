import { Map } from "immutable"
import { CHANGE_BANNER } from "./constants"

const initialState = Map({
banners: []
})


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_BANNER:
           return (
        //        {...state,banners:action.payload}
            state.set("banners",action.payload)
           )
        default:return state
    }
}


export default reducer