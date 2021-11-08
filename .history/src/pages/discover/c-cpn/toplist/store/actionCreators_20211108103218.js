import { getTopListDetail } from "../../../../../services/top-list"
import { getT } from "@/services/top-list"



export const getTopListInfoAction = () => {
    return dispatch => {
        getTopListInfo().then(res=>console.log(res))
    }
}