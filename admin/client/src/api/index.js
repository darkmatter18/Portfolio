import axios from 'axios';
import {authHeader} from "jwt-auth-react";

const baseURL = 'https://api.arkadip.co'

const authApi = axios.create({
    baseURL: baseURL,
    headers: {
        'Authentication': authHeader()
    }
})

const authLessApi = axios.create({
    baseURL: baseURL
})

export {authApi, authLessApi}