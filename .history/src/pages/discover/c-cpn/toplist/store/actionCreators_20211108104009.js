import { getTopListDetail } from "../../../../../services/top-list"
import { getToplistInfo } from "../../../../../services/top-list"



export const getTopListInfoAction = () => {
    return dispatch => {
        getToplistInfo().then(res=>{console.log(res)})
    }
}