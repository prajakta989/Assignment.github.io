const mobile_nav = document.querySelector('.mobile-nav-btn');

const nav = document.querySelector('.main-nav')

const toggleNav = () => {
    nav.classList.toggle("active");
}

mobile_nav.addEventListener('click', () => toggleNav())