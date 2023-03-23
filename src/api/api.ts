import axios from "axios";

//axios instance --> axios configuration --> axios
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });