import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeGalleryImg = ({ preview, original, description } = {}) => {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img class="gallery__image" src=${preview} data-source=${original} alt="${description}">
      </a>
    </div>
  `;
};

const galleryCards = galleryItems.map((el) => makeGalleryImg(el));

galleryEl.insertAdjacentHTML("beforeend", galleryCards.join(""));

let instance = null;

const onGalleryElClick = (event) => {
  const { target } = event;
  if (target.nodeName !== "IMG") {
    return;
  }

  const bigImg = target.getAttribute("data-source");
  const altImg = target.getAttribute("alt");

  instance = basicLightbox.create(`<img src="${bigImg}" alt="${altImg}">`, {
    onShow: () => document.addEventListener("keydown", onModalClose),
    onClose: () => document.removeEventListener("keydown", onModalClose),
  });
  instance.show();
};

const onModalClose = (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
};

galleryEl.addEventListener("click", onGalleryElClick);
