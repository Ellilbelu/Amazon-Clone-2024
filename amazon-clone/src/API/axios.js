
import axios from "axios"

const axiosInstance = axios.create({
  //local instance of using firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-8b30b/us-central1/app",
  //deploy version of amazon server on Render.com
  baseURL: "https://amazon-api-deploy-shtv.onrender.com/",
});

export {axiosInstance}