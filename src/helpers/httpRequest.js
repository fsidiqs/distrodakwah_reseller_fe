import axios from 'axios';
import { API } from '../config/default';

const AuthApiGet = async (url, params) => {
    return new Promise(resolve => {
        axios({
            method: "get",
            url: `${API}${url}`,
            // headers: getHeader(),
            params
        }).then(response => resolve(response));
    })
};

export {
    AuthApiGet
}