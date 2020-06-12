import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { API_URL } from '@/config';
// create an axios instance
const service = axios.create({
  baseURL:API_URL, // url = base url + request url
  // baseURL: `http://lovegrizzly.ga/`, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 65000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
    }

    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;

    // if (!res.code) console.log('response', res)

    // if (!res.data) throw new Error('Wrong data format, put all data in response.data property!')
    return res;
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      showClose: true
    });
    return Promise.reject(error);
  }
);

export default service;
