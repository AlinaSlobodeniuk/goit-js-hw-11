import axios, { Axios } from "axios";

const API_KEY = '49743900-b0f1cd5437de5205d7989fbc4';

export default function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });

    return axios(`https://pixabay.com/api/?${params}`);
}