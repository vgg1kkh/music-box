import { getTopListDetail } from "../../../../../services/top-list"
import { get } from 



export const getTopListInfoAction = () => {
    return dispatch => {
        getTopListInfo().then(res=>console.log(res))
    }
}