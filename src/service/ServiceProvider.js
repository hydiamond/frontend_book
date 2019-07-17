import axios from 'axios';
import Config from './config';
//inject service 

const config = new Config();

axios.interceptors.request.use(axiosConfig => {
    //TODO add token here
    axiosConfig.headers.common['Authorization'] = config.getToken();
    return axiosConfig;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => response,
    error => {
        console.clear();
        if (error.response && +error.response.status === 500) {
            window.location.href = '/500';
            return;
        }
        if ((error.response && +error.response.status === 401) || (error.response && +error.response.status === 403)) {
            //logut
            window.location.href = '/';
            return;
        }
        if (error.response && +error.response.status === 403) {
            //todo
        }
        if (error.response && +error.response.status === 404) {
            window.location.href = '/404';
            return;
        }
        return Promise.reject(error.response);
    }
);