import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeGalleryImg = ({ preview, original, description } = {}) => {
  return `
      <a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt="${description}">
      </a>
  `;
};

const galleryCards = galleryItems.map((el) => makeGalleryImg(el));

galleryEl.insertAdjacentHTML("beforeend", galleryCards.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});
