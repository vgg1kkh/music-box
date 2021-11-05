import axios from "axios";
import NProgress from "nprogress";
import { BASE_URL, TIMEOUT } from "./config";

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

request.interceptors.request.use(
  (config) => {
    NProgress.start()
    return request;
  },
  (err) => {}
);
export default request;

request.interceptors.response.use(
  (res) => {
    NProgress.done()
    return res.data;
  },
  (err) => {
      if(err && err.response){
        switch (err.response.status) {
            case 400:
              console.log("Error 400 Request Error.");
              break;
            case 401:
              console.log("Error 401 Unauthorized.");
              break;
            default:
             console.log("Other Errors.");
          }
      }
   
    return err
  }
);
