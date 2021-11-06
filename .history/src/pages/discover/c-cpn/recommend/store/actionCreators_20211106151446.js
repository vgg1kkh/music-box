import { CHANGE_BANNER } from "./constants"



export const changeBannerAction = (banners)=>{
    return {
        type: CHANGE_BANNER,
        payload: banners
    }
}

export const getBanner