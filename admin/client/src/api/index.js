import axios from 'axios';

const baseURL = 'https://api.arkadip.co'

const Api = axios.create({
    baseURL: baseURL
})

export {Api}