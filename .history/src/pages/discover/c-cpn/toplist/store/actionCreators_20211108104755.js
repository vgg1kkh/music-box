import { getTopListDetail } from "../../../../../services/top-list"
import { getToplistInfo } from "../../../../../services/top-list"


// Change the 
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