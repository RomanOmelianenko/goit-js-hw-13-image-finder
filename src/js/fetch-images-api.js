// import axios from "axios";

const baseUrl = 'https://pixabay.com/api/';
const apiKey = '18838067-90d811c5126886249211760e4';

function fetchImages(searchQuery) {
    const options = {
        pageNumber: 1,
        // searchQuery: ''
    }
    const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${options.pageNumber}&per_page=12&key=${apiKey}`

    //======== With AXIOS =========
    // return axios(url)
    //     .then(({data}) => data.hits)
    //     .catch(error => console.log(error))
    //====== Without AXIOS ==========
    return fetch(url)
        .then(res => res.json())
        .then(({hits}) => hits)
        .catch(error => console.log(error))
    // ===============================
}

export default fetchImages

