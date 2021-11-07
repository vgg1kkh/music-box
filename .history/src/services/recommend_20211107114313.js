import instance from "./request";

//get the 
export const getBanners= () => {
    return instance({
        url:"/banner"
    })
}

