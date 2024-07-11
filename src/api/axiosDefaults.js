import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-v2-e30d7abd8950.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();