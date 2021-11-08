import { getTopListDetail } from "../../../../../services/top-list"
import { getToplistInfo } from "../../../../../services/top-list"
import { CHANGE_TOPLIST_COUNT } from "./constants"


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
    payload:index,
  })