import { getTopListDetail } from "../../../../../services/top-list"
import getT



export const getTopListInfoAction = () => {
    return dispatch => {
        getTopListInfo().then(res=>console.log(res))
    }
}