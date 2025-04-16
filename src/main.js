import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api";

import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions"



const form = document.querySelector('.form');
const input = form.querySelector('[name="search-text"]')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return
    }
    clearGallery();
    showLoader();
    getImagesByQuery(query);
})