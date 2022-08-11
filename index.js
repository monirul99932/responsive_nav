var navMenu = document.querySelector(".nav__menu");
var toggler = document.querySelector(".nav__toggler");
var social = document.querySelector(".nav__social");

toggler.addEventListener('click', () => {
    // // --------navigation bar design
    // if (navMenu.classList.contains('nav__menu__show')) {
    //     navMenu.classList.remove("nav__menu__show");
    // } else {
    //     navMenu.classList.add("nav__menu__show");
    // }
    // // --------social contact icon
    // if (social.classList.contains('nav__social__show')) {
    //     social.classList.remove("nav__social__show");
    // } else {
    //     social.classList.add("nav__social__show");
    // }

    navMenu.classList.toggle("nav__menu__show");
    social.classList.toggle("nav__social__show");
});