import instance from "./request";

export function getTopListInfo(){
    instance({
        url:"/toplist"
    })
}