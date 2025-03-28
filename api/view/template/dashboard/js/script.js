const btnMenu = document.getElementById('btn-menu');
const btnClosed = document.getElementById('btn-closed');
const navbarMenu = document.getElementById('navbar-menu');

let isMenuOpen = false;
navbarMenu.classList.add('slide-out');

function openMenu() {
    navbarMenu.classList.add('slide-in');
    navbarMenu.classList.remove('slide-out');
    isMenuOpen = true;
}

function closeMenu() {
    navbarMenu.classList.add('slide-out');
    navbarMenu.classList.remove('slide-in');
    isMenuOpen = false;
}

btnMenu.addEventListener('click', function () {
    isMenuOpen ? closeMenu() : openMenu();
});

btnClosed.addEventListener('click', closeMenu);
