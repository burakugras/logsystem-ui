import axios from "axios";
import tokenService from "../services/tokenService";
import { globalStore } from "../../configureStore";
import { addRequest, removeRequest } from "../../store/loading/loadingSlice";
import { BASE_API_URL } from "../../environment/environment";

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use(config => {
    globalStore.dispatch(addRequest());
    const token = tokenService.getToken();
    config.headers.Authorization = "Bearer " + token;
    return config;
});
axiosInstance.interceptors.response.use(
    response => {
        globalStore.dispatch(removeRequest());
        return response;
    },
    error => {
        handleError(error);
        globalStore.dispatch(removeRequest());
        return error;
    },
);

export default axiosInstance;