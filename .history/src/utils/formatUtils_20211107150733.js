export function getImageSize(url,width=130,height=width){
    return `${url}?param=${width}x${height}`
}

export const getCount = number => {
    let num = number * 1
    switch(num){
        case num> 1000000:
            return Math.floor(num/1000000) + ' M'
        case num > 1000:
            return Math.floor(num/1000) + ' K'
        default:
            return num
    }   
}