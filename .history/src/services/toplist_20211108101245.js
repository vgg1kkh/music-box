import instance from "./request";

export function getTopListInfo(){
    return instance({
        url:"/toplist"
    })
}