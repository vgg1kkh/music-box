import instance from "./request";

//get the banners
export const getBanners= () => {
    return instance({
        url:"/banner"
    })
}

//get the hot-recommends
export const getHotRecommends = () => {
    return instance({
        url:"/personalized"
    })
}

//get the newAlbums for the Carousel
export const getNewAlbums = ()=>{
  return  instance({
        url:'/album/newest'
    })
}

  //signed singer in the homepage
  export function getSettleSinger(limit=10, area=7) {
    return instance({
      url: "/artist/list",
      params: {
        area,
        limit
      }
    })
  }

