'use strict';
import {default as images} from "./gallery-items.js";

const mainGallery = document.querySelector('.gallery');
const mainLightBox = document.querySelector('.lightbox');
const mainOverlay = document.querySelector('.lightbox__content');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const openImg = document.querySelector('.lightbox__image');
const imgMain = images.reduce((acc, item) => {
item = `<li class = "gallery__item">
            <div class = "gallery__link">
                <div class = "img__gallery" href="${item.original}">
                    <img class = "gallery__image" src="${item.original}" data-source = "${item.original}" alt="${item.description}"/>
                        <div class = "gallery__icon">
                        <span class = "material-icons"></span>
                        </div>
                </div>
            </div>
        </li>`;
return acc += item;
},'');
mainGallery.insertAdjacentHTML('afterbegin', imgMain);

const openEmerge = (event) => {
    if (event.target === event.currentTarget){
    return;
}
    mainLightBox.classList.add('is-open');
    openImg.setAttribute('src', `${event.target.getAttribute('src')}`);
}
const closeEmerge = (event) => {
    if (mainLightBox.classList.contains('is-open') && event.target !== openImg) {
        mainLightBox.classList.remove('is-open');
    }
    return;
}
const closeKeyboard = (event) =>{
    if(event.keyCode === 27)
    mainLightBox.classList.remove('is-open');
}
mainGallery.addEventListener('click', openEmerge);
closeBtn.addEventListener('click', closeEmerge);
mainOverlay.addEventListener('click', closeEmerge);
document.addEventListener('keydown', closeKeyboard);
