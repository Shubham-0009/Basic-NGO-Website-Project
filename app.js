const menu = document.querySelector("#mobile-menu");
const meun_links = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

//Display Mobile Menu
const MobileMenu = () => {
  menu.classList.toggle("is-active");
  meun_links.classList.toggle("active");
};

menu.addEventListener("click", MobileMenu);

//Active menu while scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#aboutus-page");
  const servicesMenu = document.querySelector("#services-page");
  const galleryMenu = document.querySelector("#gallery-page");
  const joinUsMenu = document.querySelector("#join-us-page");

  let scrollPos = window.scrollY;
  // console.log(scrollPos)

  //adds highlight class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add("highlight");
    galleryMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2700) {
    galleryMenu.classList.add("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 4434) {
    galleryMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");

    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//Close mobile menu on click on menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle("is-active");
    menu_links.classList.remove("active");
  }
};

menu_links.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
