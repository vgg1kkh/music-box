import instance from "./request";

export onst getBanners= () => {
    return instance({
        url:"/banner"
    })
}
