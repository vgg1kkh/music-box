import instance from "./request";


export function getToplistInfo() {
    return request({
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