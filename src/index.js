import './sass/style.scss';
import './js/create-image';
import refs from './js/refs'
import updateImageMarkup from './js/create-image';
import imageService from './js/image-service-api';
// import * as basicLightbox from "basiclightbox";
// import "basiclightbox/dist/basicLightbox.min.css";

function inputRef(event) {
    event.preventDefault();

    const form = event.currentTarget;
    imageService.query = form.elements.query.value;
    refs.galleryListRef.innerHTML = '';
    
    imageService.resetPage();
    loadMore();
    form.reset();
}

function loadMore() {
    refs.loadMoreRef.classList.add('is-hidden');

    imageService
        .fetchImages()
        .then(hits => {
            updateImageMarkup(hits);
            refs.loadMoreRef.classList.remove('is-hidden');

            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth'
            });
        });
}

// function openImg(event) {
//     if (event.target.nodeName === "IMG") {
//         const light = basicLightbox.create(
//             `<img src="${event.target.dataset.source}" /> `
//         );

//         light.show();
//     }
// }

refs.inputRef.addEventListener('submit', inputRef);
refs.loadMoreRef.addEventListener('click', loadMore);
// refs.galleryListRef.addEventListener("click", openImg);
