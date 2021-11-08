import { getTopListDetail } from "../../../../../services/top-list";
import { getToplistInfo } from "../../../../../services/top-list";
import {
  CHANGE_TOPLIST_COUNT,
  CHANGE_CURRENT_INDEX,
  CHANGE_CURRENT_TOPLIST_ID,
  CHANGE_CURRENT_TOPLIST
} from "./constants";

// Change the Top List action
const changeToplistAction = (data) => ({
  type: CHANGE_TOPLIST_COUNT,
  payload: data,
});

export const getTopListInfoAction = () => {
  return (dispatch) => {
    getToplistInfo()
      .then((res) => {
        dispatch(changeToplistAction(res.list));
      })
      .then((err) => console.log("Failed to update the TopListInfo"));
  };
};

// change Current Index Action
export const changeCurrentIndexAction = (index) => ({
  type: CHANGE_CURRENT_INDEX,
  payload: index,
});

// change current song ID_Action
export const changeCurrentToplistIdAction = (id) => ({
  type: CHANGE_CURRENT_TOPLIST_ID,
  payload: id,
});

// 改变不同榜单列表Action
const changeCurrentToplist = (toplist) => ({
    type: CHANGE_CURRENT_TOPLIST,
    payload:toplist,
  })

//get the Action to change the title, imgUrl
export const getToplistTitleInfoAction = (id) => {
    return (dispatch) => {
      getToplistDetail(id).then((res) => {
        // 取出榜单标题详情信息
        const {
          coverImgUrl,
          name,
          trackNumberUpdateTime,
          playCount,
          subscribedCount,
          commentCount,
          shareCount,
        } = res && res.playlist
        const toplistTitleInfo = {
          coverImgUrl,
          name,
          trackNumberUpdateTime,
          playCount,
          subscribedCount,
          commentCount,
          shareCount,
        }
        dispatch(changeToplistTitleInfo(toplistTitleInfo))
      })
    }
  }

export const getToplistItemAction  = (id) => {
  return (dispatch) => {
    getTopListDetail(id)
      .then((res) => {
        
        const currentToplist = res && res.playlist && res.playlist.tracks
        dispatch(changeCurrentToplist(currentToplist))
      })
      .catch((err) => console.log("Failed to get toplist detail."));
  };
};
