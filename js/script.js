// Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Search Menu
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Klik Luar
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    } 
});

// Modal Box
const modalBox = document.querySelector('#modal-box');
const modalButton = document.querySelectorAll('#reservation-menu');

document.querySelector('#reservation-menu').onclick = (e) => {
    modalBox.style.display = 'flex';
    e.preventDefault();
}

// Close
document.querySelector('.modal .close-icon').onclick = (e) => {
    modalBox.style.display = 'none';
    e.preventDefault();
}

// Klick luar
window.onclick = (e) => {
    if (e.target === modalBox) {
        modalBox.style.display = 'none';
    }
};