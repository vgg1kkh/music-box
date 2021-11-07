import instance from "./request";

export const getTopList= (id)=>{
    instance({
        url:"/playlist/detail",
        params:{
            id
        }
    })
}