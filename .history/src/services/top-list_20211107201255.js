import instance from "./request";

export const getTopListDetail = (id)=>{
    return instance({
        url:"/playlist/detail",
        params:{
            id
        }
    })
}