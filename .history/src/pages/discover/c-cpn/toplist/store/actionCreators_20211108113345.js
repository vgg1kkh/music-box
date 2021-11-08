import { getTopListDetail } from "../../../../../services/top-list"
import { getToplistInfo } from "../../../../../services/top-list"
import { CHANGE_TOPLIST_COUNT,CHANGE_CURRENT_INDEX } from "./constants"


// Change the Top List action
const changeToplistAction = (data) => ({
    type: CHANGE_TOPLIST_COUNT,
    payload:data,
  })

export const getTopListInfoAction = () => {
    return dispatch => {
        getToplistInfo().then(res=>{
            dispatch(changeToplistAction(res.list))
        })
    }
}

// change Current Index Action
export const changeCurrentIndexAction = (index) => ({
    type: CHANGE_CURRENT_INDEX,
    payload:index
  })


// 改变当前歌单的ID_Action
export const changeCurrentToplistIdAction = (id) => ({
    type: actionTypes.CHANGE_CURRENT_TOPLIST_ID,
    id,
  })