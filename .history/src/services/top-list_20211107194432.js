import instance from "./request";

export const get= (id)=>{
    instance({
        url:"/playlist/detail",
        params:{
            id
        }
    })
}