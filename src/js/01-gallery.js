// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

for (const img of galleryItems) {
  const listEl = `<li>
  <a class="gallery__item" href=${img.original}>
    <img class="gallery__image" src=${img.preview} 
    alt=${img.description} />
  </a></li>`;
  galleryEl.insertAdjacentHTML('beforeend', listEl);
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
