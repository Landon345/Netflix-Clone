import axios from "axios";

/** base url to make request to the movie database */
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default instance;
