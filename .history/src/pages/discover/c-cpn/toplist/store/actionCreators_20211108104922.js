import { getTopListDetail } from "../../../../../services/top-list"
import { getToplistInfo } from "../../../../../services/top-list"
import CHANGE_


// Change the Top List action
const changeToplistAction = (toplistInfo) => ({
    type: CHANGE_TOPLIST_COUNT,
    toplistInfo,
  })

export const getTopListInfoAction = () => {
    return dispatch => {
        getToplistInfo().then(res=>{
            dispatch(changeTopListAction())
        })
    }
}