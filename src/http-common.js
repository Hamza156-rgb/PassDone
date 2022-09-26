import axios from "axios";

export default axios.create({
  baseURL:  "http://passdoneapi.codetreck.com/public/api/",
  headers: {
    "Content-type": "application/json"
  }
});