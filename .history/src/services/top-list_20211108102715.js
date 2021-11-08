import instance from "./request";


export function getToplistInfo() {
    return instance({
      url: '/toplist'
    })
  }

export const getTopListDetail = (id)=>{
    return instance({
        url:"/playlist/detail",
        params:{
            id
        }
    })
}