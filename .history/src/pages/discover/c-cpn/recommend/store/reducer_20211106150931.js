import CH

const initialState = {
banners: []
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_TOP_BANNER:
            [...state.banners, ...action.payload]

        default:return state

    }
}


export default reducer