import { CHANGE_BANNER } from "./constants"



export const changeBanner = (banners)=>{
    return {
        type: CHANGE_BANNER,
        payload: banners
    }
}

export const getBannersAction = () => {

}