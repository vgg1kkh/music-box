import { getBanners } from "@/services/recommend";

import { CHANGE_BANNER } from "./constants";

import { message } from "antd";

export const changeBannerAction = (banners) => {
  return {
    type: CHANGE_BANNER,
    payload: banners,
  };
};

export const getBannersAction = (dispatch) => {
  //initiate an axios request
  getBanners()
    .then((res) => {
      dispatch(changeBannerAction(res.banners));
    })
    .catch((err) => message.error("Failed to get the banners.");
    });
};
