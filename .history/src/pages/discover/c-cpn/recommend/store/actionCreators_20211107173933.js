import { getBanners,getHotRecommends } from "@/services/recommend";

import { CHANGE_BANNER,CHANGE_HOTRECOMMEND, CHANGE_NEWALBUM } from "./constants";

import { message } from "antd";
import { getNewAlbums } from "../../../../../services/recommend";

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
const changeHotRecommendsAction = (data) => ({
    type:CHANGE_HOTRECOMMEND,
    payload: data
})

//create the getHotRecommendsAction
export const getHotRecommdsAction = ()=>{
    return dispatch => {
        getHotRecommends().then(res=>{
            dispatch(changeHotRecommendsAction(res.result))
        })
        .catch(err=>message.error("Failed to get the hot songs."))
    }
}

//generate the change album action
const changeNewAlbumsAction = data => ({
    type: CHANGE_NEWALBUM,
    
})

//GET the newAlum action
export const getNewAlbumAction = ()=>{
    return dispatch => {
        getNewAlbums().then(res=>{
            console.log(res);
            dispatch(changeNew)
        }).catch(err=>message.error("Failed to get the new albums."))
    }
}