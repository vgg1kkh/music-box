import instance from "./request";

//get the banners
export const getBanners= () => {
    return instance({
        url:"/banner"
    })
}

