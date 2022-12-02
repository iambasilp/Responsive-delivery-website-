// Show menu

const navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close"),
  navMenu = document.querySelector("#nav-menu");

// when click the toggle button
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// Remove menu in mobile
const navLinks = document.querySelectorAll(".nav__link");

const showNavlink = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", showNavlink);
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
console.log(sections)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change header backround
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY > 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// Scroll up
const showScrollup = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY > 350
    ? scrollUp.classList.add("show-scrollup")
    : scrollUp.classList.remove("show-scrollup");
};
window.addEventListener("scroll", showScrollup);
