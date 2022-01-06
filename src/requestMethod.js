import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

var TOKEN = '';
if (localStorage.getItem("persist:root")) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.userSlice)?.currentUser?.token;
}
console.log("TOKEN in req method", TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});