import axios from "axios";

let instance = axios.create({
    baseURL: "https://estonian-pizzaa-be.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
    }
});

instance.interceptors.request.use(function (config) {
    const token = JSON.parse(localStorage.getItem("user"))?.accessToken;

    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});


export default instance;