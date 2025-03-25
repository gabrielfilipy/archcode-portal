function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
         mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

document.querySelectorAll('.mobile-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        document.getElementById('mobileMenu').style.display = 'none';
    });
});


function toggleSubmenu(event) {
    event.stopPropagation();

    const submenu = event.target.closest('.menu-item').querySelector('.submenu');

    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

document.addEventListener('click', function() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(function(submenu) {
        submenu.style.display = 'none';
    });
});

document.getElementById('scroll-link-sust').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.select-sustentabilidade').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-link-poli').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.select-politica').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-link-aval').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.select-avaliacoes').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-link-prod').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.select-produtos').scrollIntoView({ behavior: 'smooth' });
});

//salvar no localstorage do navegador
function setScrollTarget(target) {
    localStorage.setItem('scrollToSection', target);
}

//Verifica se há algo no localstorage para fazer o scroll no index
document.addEventListener('DOMContentLoaded', function () {
    const sectionToScroll = localStorage.getItem('scrollToSection');

    if (sectionToScroll) {
        const targetElement = document.querySelector('.' + sectionToScroll);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
        localStorage.removeItem('scrollToSection');
    }
});
