export function getImageSize(url,width=130,height=width){
    return `${url}?param=${width}x${height}`
}

export function getCount = num =>{
    let num = num * 1
    switch(num){
        case num> 1000000:
            return Math.floor(num/1000000) + ' M'
        case num > 1000:
            return Math.floor(num/1000) = ' K'
    }   
}