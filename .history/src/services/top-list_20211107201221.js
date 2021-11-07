import instance from "./request";

export const getTopListDetail = (id)=>{
    return instance({
        url:"/playlist/details",
        params:{
            id
        }
    })
}