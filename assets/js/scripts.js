// Mobile Menu Toggle
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const productLink = document.getElementById('product-parent');
const companyLink = document.getElementById('company-parent');
const connectLink = document.getElementById('connect-parent');
const parentLinks = document.getElementsByClassName('parent-link');
const leftMenu = document.querySelector('nav#left-main-menu ul');
const rightMenu = document.querySelector('nav#right-main-menu ul');





//event listeners
hamburgerIcon.addEventListener('click',openMenu);
closeIcon.addEventListener('click', closeMenu);

productLink.addEventListener('click', openSubMenu );
companyLink.addEventListener('click', openSubMenu );
connectLink.addEventListener('click', openSubMenu );


//functions
function openSubMenu(){
    if(this === productLink) {
       const subMenu =  productLink.querySelector('ul.sub-menu');
       if(subMenu.style.display === "none"){
            subMenu.style.display = 'block';
       } else {
            subMenu.style.display = 'none';
       }
    }

    if(this === companyLink) {
        const subMenu =  companyLink.querySelector('ul.sub-menu');
        if(subMenu.style.display === "none"){
             subMenu.style.display = 'block';
        } else {
             subMenu.style.display = 'none';
        }
     }

     if(this === connectLink) {
        const subMenu =  connectLink.querySelector('ul.sub-menu');
        if(subMenu.style.display === "none"){
             subMenu.style.display = 'block';
        } else {
             subMenu.style.display = 'none';
        }
     }


}

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