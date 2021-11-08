import { getTopListDetail } from "../../../../../services/top-list"
import get



export const getTopListInfoAction = () => {
    return dispatch => {
        getTopListInfo().then(res=>console.log(res))
    }
}