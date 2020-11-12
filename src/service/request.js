import axios from "axios";
import cache from "../helpers/cache";
import { API as BASE_API } from "constants/global";

/**
 * main api config
 * @author {eliaschampi04}
 */

/**
 * creating a new axios instance
 */
const request = axios.create({
  baseURL: BASE_API,
  timeout: 100000,
});

/**
 * this is main configuration for request data
 */
request.interceptors.request.use(
  (config) => {
    if (cache.hasThis("user")) {
      config.headers["Authorization"] = "JWT " + cache.getItem("user").token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * this is main configuration for given data from api
 */
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error)
    let errData = {
      message: "No tienes conexion a Internet",
    };
    if (error.response) {
      errData = error.response.data;
      switch (error.response.status) {
        case 401:
          cache.removeItem("user");
          window.location.reload();
          break;
        default:
          break;
      }
    }
    return Promise.reject(errData);
  }
);

export default request;
