import axios from "axios";
export default axios.create({
    baseURL: "https://estonian-pizzaa-be.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
});