import { getBanners,getHotRecommends } from "@/services/recommend";

import { CHANGE_BANNER,CHANGE_HOTRECOMMEND } from "./constants";

import { message } from "antd";

//generate the chnage banner action
const changeBannerAction = (banners) => {
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

//dispatch the change HotRecommendsAction
const changeHotRecommends

//create the getHotRecommendsAction
export const getHotRecommdsAction = ()=>{
    return dispatch => {
        getHotRecommends().then(res=>{
            console.log(res)
            
        })
        .catch(err=>message.error("Failed to get the hot songs."))
    }
}