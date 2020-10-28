import axios from "axios";

const baseUrl = 'https://pixabay.com/api/';
const apiKey = '18838067-90d811c5126886249211760e4';

export default {
    searchQuery: '',
    pageNumber: 1,
    fetchImages() {
        const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${apiKey}`
       
        return fetch(url)
            .then(res => res.json())
            .then(({ hits }) => {
                this.incrementPage();

                return hits
            })
        },
    resetPage() {
        this.pageNumber = 1
    },
    incrementPage() {
        this.pageNumber += 1
    },
    get query() {
        return this.searchQuery
    },
    set query(value) {
        this.searchQuery = value
    },
}