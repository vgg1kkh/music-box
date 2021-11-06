import instance from "./request";

export const getBanners= () => {
    return instance({
        url:"/banner"
    })
}
