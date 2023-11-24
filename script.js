'use strict';

const profilePhoto = document.querySelector('.profile-container');

function profileInteractivity() {
    profilePhoto.classList.toggle('grayscale');

    setTimeout(profileInteractivity, 3000);
}

profileInteractivity();
