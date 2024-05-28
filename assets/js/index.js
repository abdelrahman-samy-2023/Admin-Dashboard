// Showing and Hiding the Sidebar
// Variables for Showing and Hiding
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
// When Click on Bars Button the Menu will be shown
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});
// When Click on Close Button the Menu will be hidden
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// Change Theme (Dark Theme and Light Theme)
// Variable for Change Theme Toggle Button
const themeToggler = document.querySelector('.theme-toggler');
// Change Theme (Dark Theme and Light Theme)
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('svg:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('svg:nth-child(2)').classList.toggle('active');
});