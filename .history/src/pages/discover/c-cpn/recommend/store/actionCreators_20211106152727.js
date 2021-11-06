import { getBanners } from "@/services/recommend"
import { AntDesignOutlined } from "@ant-design/icons/lib/icons"
import { CHANGE_BANNER } from "./constants"

import {message} from 'antd'

export const changeBannerAction = (banners)=>{
    return {
        type: CHANGE_BANNER,
        payload: banners
    }
}

export const getBannersAction = (dispatch) => {
    getBanners().then(res=>{
        console.log(res);
        dispatch(changeBannerAction(res.banners)).catch(
            err=>{
                clg
            }
        )
    })
}