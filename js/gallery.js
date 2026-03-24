const galleryItems = [
  {
    preview: "./images/1.png",
    original: "./images/1.png",
    description: "Nature 1",
  },
  {
    preview: "./images/2.png",
    original: "./images/2.png",
    description: "Nature 2",
  },
  {
    preview: "./images/3.png",
    original: "./images/3.png",
    description: "Nature 3",
  },
  {
    preview: "./images/4.png",
    original: "./images/4.png",
    description: "Nature 4",
  },
  {
    preview: "./images/5.png",
    original: "./images/5.png",
    description: "Nature 5",
  },
  {
    preview: "./images/6.png",
    original: "./images/6.png",
    description: "Nature 6",
  },
  {
    preview: "./images/7.png",
    original: "./images/7.png",
    description: "Nature 7",
  },
  {
    preview: "./images/8.png",
    original: "./images/8.png",
    description: "Nature 8",
  },
  {
    preview: "./images/9.png",
    original: "./images/9.png",
    description: "Nature 9",
  },
];

const galleryContainer = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector(".lightbox__overlay");

const cardsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join("");

galleryContainer.innerHTML = cardsMarkup;

galleryContainer.addEventListener("click", onGalleryClick);
closeBtn.addEventListener("click", onCloseModal);
overlay.addEventListener("click", onCloseModal);

function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;

  lightbox.classList.add("is-open");
  lightboxImage.src = evt.target.dataset.source;
  lightboxImage.alt = evt.target.alt;
  window.addEventListener("keydown", onEscKeyPress);
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

function onEscKeyPress(evt) {
  if (evt.code === "Escape") onCloseModal();
}
