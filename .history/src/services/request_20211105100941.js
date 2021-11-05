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

      }
   
    return err
  }
);
