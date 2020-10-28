import hitsTpl from '../templates/templates.hbs';
import refs from './refs';

function updateImageMarkup(hits) {
    const markup = hitsTpl(hits);
    refs.galleryListRef.insertAdjacentHTML('beforeend', markup)
}

export default updateImageMarkup;