const btn = document.querySelector('.share-icon');
const popupbtn = document.querySelector('.popup-share-icon');
const profileContainer = document.querySelector('.profile-container');
const popup = document.querySelector('.share-popup');

btn.addEventListener('click', () => {
    profileContainer.style.display = 'none';
    popup.style.display = 'flex';
})

popupbtn.addEventListener('click', () => {
    profileContainer.style.display = 'flex';
    popup.style.display = 'none';
})