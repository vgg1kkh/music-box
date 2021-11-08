export function getImageSize(url,width=130,height=width){
    return `${url}?param=${width}x${height}`
}

export const getCount = number => {

    let num = number * 1
    if(num>1000000){
        return (Math.floor(num/1000000)+" M")
    }else if(num>1000){
        return (Math.floor(num/1000)+" K")
    }else return num
}

export function formatDate(time, fmt) {
    let date = new Date(time)
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : padLeftZero(str)
        )
      }
    }
    return fmt
  }
  
  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }
  
  export function formatMonthDay(time) {
    return formatDate(time, 'MM月dd日')
  }
  