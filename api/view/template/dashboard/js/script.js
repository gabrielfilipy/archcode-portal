const btnMenu = document.getElementById('btn-menu');
const navbarMenu = document.getElementById('navbar-menu');

let isMenuOpen = true;

btnMenu.addEventListener('click', function() {
    if (isMenuOpen) {
        navbarMenu.classList.add('slide-out');
        navbarMenu.classList.remove('slide-in');  // Remove a animação de entrada
        btnMenu.classList.add('rotate');
        isMenuOpen = false;
    } else {
        navbarMenu.classList.remove('slide-out');
        navbarMenu.classList.add('slide-in');  // Adiciona a animação de entrada
        btnMenu.classList.remove('rotate');
        isMenuOpen = true;
    }
});
