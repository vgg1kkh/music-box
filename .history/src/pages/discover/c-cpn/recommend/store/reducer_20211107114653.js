import { Map } from "immutable"
import { CHANGE_BANNER, CHANGE_HOTRECOMMEND } from "./constants"


const initialState = Map({
banners: [],
hotRecommends:[]
})


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_BANNER:
           return (
        //        {...state,banners:action.payload}
            state.set("banners",action.payload)
           )
        
        case CHANGE_HOTRECOMMEND:
            return 
        default:return state
    }
}


export default reducer