import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID e19041b6c2e5367ecab45c28001595b66e54583946a109fe9a465375d6f7c60b"
  }
});
