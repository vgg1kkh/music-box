import { getTopListDetail } from "../../../../../services/top-list"
import { get } from "@/services/top-list"



export const getTopListInfoAction = () => {
    return dispatch => {
        getTopListInfo().then(res=>console.log(res))
    }
}