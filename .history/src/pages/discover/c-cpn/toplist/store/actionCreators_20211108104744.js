import { getTopListDetail } from "../../../../../services/top-list"
import { getToplistInfo } from "../../../../../services/top-list"


// 改变榜单数据Action
const changeToplistAction = (toplistInfo) => ({
    type: actionTypes.CHANGE_TOPLIST_COUNT,
    toplistInfo,
  })

export const getTopListInfoAction = () => {
    return dispatch => {
        getToplistInfo().then(res=>{

        })
    }
}