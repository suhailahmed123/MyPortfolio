/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(event) {
    navMenu.classList.remove('show');

    // Smooth scroll to the section when clicking on the navigation link
    event.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    // Consider the fixed header height
    const headerHeight = document.querySelector('.l-header').offsetHeight;

    window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: 'smooth'
    });
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop - 50 && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link[href="#' + sectionId + '"]').classList.add('active');
        } else {
            document.querySelector('.nav__link[href="#' + sectionId + '"]').classList.remove('active');
        }
    });
}
