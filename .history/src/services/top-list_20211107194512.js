import instance from "./request";

export const getTopListDetail = (id)=>{
    instance({
        url:"/playlist/detail",
        params:{
            id
        }
    })
}