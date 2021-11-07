export function getImageSize(url,width=130,height=width){
    return `${url}?param=${width}x${height}`
}

export const getCount = number => {

    let num = number * 1
    if(num>1000000){
        return (Math.floor(num" M")
    }else if(num>1000){
        return (" K")
    }else return num
}