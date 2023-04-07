const button = document.querySelector('.button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

button.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
