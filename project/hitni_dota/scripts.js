const navbarButton = document.querySelector(".js-navbar-button");
const navbar = document.querySelector(".js-navbar");
const navbarLinks = document.querySelectorAll('a')
let mobile = false;
window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 815) {
        navbarButton.classList.add('show');
        navbar.classList.add('hide');
        mobile = true;
    } else {
        navbarButton.classList.remove('show');
        navbar.classList.remove('hide');
        mobile = false;
    }
});
navbarButton.addEventListener("click", () => {
    navbar.classList.remove('hide');
    navbarButton.classList.remove('show');
});

navbarLinks.forEach(link => {
    link.addEventListener('click',() => {
        if (mobile) {
            navbarButton.classList.add('show');
            navbar.classList.add('hide');
        }
    })
})