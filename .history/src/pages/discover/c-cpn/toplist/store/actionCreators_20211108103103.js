import { getTopListDetail } from "../../../../../services/top-list"
import { getTopListInfo } from "@/services/toplist"



export const getTopListInfoAction = () => {
    return dispatch => {
        getTopListInfo().then(res=>console.log(res))
    }
}