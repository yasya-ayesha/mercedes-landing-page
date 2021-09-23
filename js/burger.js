const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');

const toggleMenu = () => { // open/close the burger menu
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
};

burger.addEventListener('click', () => toggleMenu()); // click on burger btn activates function

menuElem.addEventListener('click', (event) => { // closing the burger menu on click on menu link
    if (event.target.classList.contains('menu-list__link')) {
        toggleMenu();
    }
})