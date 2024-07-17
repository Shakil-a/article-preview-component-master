const btn = document.querySelector('.share-icon');
const popupbtn = document.querySelector('.popup-share-icon');
const profileContainer = document.querySelector('.profile-container');
const popup = document.querySelector('.share-popup');

function togglePopup() {
    if (window.innerWidth < 786) {
        profileContainer.style.display = 'none';
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'flex'; // Always show the popup
    }
}

btn.addEventListener('click', togglePopup);

popupbtn.addEventListener('click', () => {
    profileContainer.style.display = 'flex';
    popup.style.display = 'none';
});

// Adjust display on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 786) {
        profileContainer.style.display = 'flex';
    }
});
