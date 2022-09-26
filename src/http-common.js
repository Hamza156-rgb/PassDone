import axios from "axios";

export default axios.create({
  baseURL:  "https://localhost:44373/api/",
  headers: {
    "Content-type": "application/json"
  }
});