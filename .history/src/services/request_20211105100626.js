import axios from "axios";
import NProgress from 'nprogress'
import { BASE_URL, TIMEOUT } from "./config";

const request  =axios.create({
    baseURL: BASE_URL,
    timeout:TIMEOUT
})


request.interceptors.request.use(config=>{

    return request
},err=>{

})
export default request

request.interceptors.response.use(res=>{
    return res.data
},err => {
    switch(err.response.status){
        case 400:
            return console.log("Error 400 Request Error")
            break;
            case 401:
            return console.log("Error 401 Unauthorized.")
            break;
            default:
                return console.log("object")
    }
})