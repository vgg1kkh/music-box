import { getTopListDetail } from "../../../../../services/top-list"
import { getToplistInfo } from "../../../../../services/top-list"


const 

export const getTopListInfoAction = () => {
    return dispatch => {
        getToplistInfo().then(res=>{

        })
    }
}