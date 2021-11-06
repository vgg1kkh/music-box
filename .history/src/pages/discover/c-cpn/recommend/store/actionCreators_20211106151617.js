import { getBanners } from "../../../../../services/recommend"
import { CHANGE_BANNER } from "./constants"



export const changeBannerAction = (banners)=>{
    return {
        type: CHANGE_BANNER,
        payload: banners
    }
}

export const getBannersAction = () => {
    getBanners()
}