const initialState = {
banners: []
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_TOP_BANNER:
            ...state.banners

        default:return state

    }
}


export default reducer