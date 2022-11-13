// Mobile Menu Toggle
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const leftMenu = document.querySelector('nav#left-main-menu ul');
const rightMenu = document.querySelector('nav#right-main-menu ul');

hamburgerIcon.addEventListener('click',openMenu);
closeIcon.addEventListener('click', closeMenu);

function openMenu(){
    if(hamburgerIcon.className == 'hide') {
        hamburgerIcon.className = 'show';
        closeIcon.className = 'hide';
    } else {
        hamburgerIcon.className = 'hide';
        closeIcon.className = 'show';
    }
    toggleMenu();
}

function closeMenu () {
    if(hamburgerIcon.className == 'show') {
        hamburgerIcon.className = 'hide';
        closeIcon.className = 'show';
    } else {
        hamburgerIcon.className = 'show';
        closeIcon.className = 'hide';
    }
    toggleMenu();
}

function toggleMenu(){
    // mobileMenuContainer.classList.toggle('open');
    if(mobileMenuContainer.className == 'open'){
        mobileMenuContainer.className = 'close';
    } else {
        mobileMenuContainer.className = 'open';
    }
}