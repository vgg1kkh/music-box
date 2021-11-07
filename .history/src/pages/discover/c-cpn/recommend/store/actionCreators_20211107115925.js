import { getBanners,getHotRecommends } from "@/services/recommend";

import { CHANGE_BANNER,CHANGE_HOTRECOMMEND } from "./constants";

import { message } from "antd";

//generate the chnage banner action
export const changeBannerAction = (banners) => {
  return {
    type: CHANGE_BANNER,
    payload: banners,
  };
};

//Create the getBannersAction
export const getBannersAction = () => {
  //initiate an axios request
  return dispatch=>
  getBanners()
    .then((res) => {
      dispatch(changeBannerAction(res.banners));
    })
    .catch((err) => message.error("Failed to get the banners.",err));
};


//create the getHotRecommendsAction
export const getHotRecommdsAction = ()=>{
    return dispatch => {
        getHotRecommends().then(res=>lo)
    }
}