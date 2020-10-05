new Glide(".glide", {
    autoplay: 4000,
    type: "carousel",
    animationDuration: 3000,
}).mount();

new Glide(".glide-2", {
    autoplay: 4000,
    type: "carousel",
    animationDuration: 3000,
    perView: 3,
    breakpoints: {
        320: {
            perView: 1
        },
        768: {
            perView: 2
        }
    }
}).mount();

// mobile button catalog show/hide
const buttonToCatalog = document.querySelector(".header__button-catalog");
const mobileCatalog = document.querySelector(".header__catalog__mobile");

buttonToCatalog.addEventListener("click", function() {
    if (mobileCatalog.style.display === "none") {
        mobileCatalog.style.display = "grid";
    } else {
        mobileCatalog.style.display = "none";
    }
});

//dropdown for mobile menu
const subtitleCatalog = document.querySelector(".menu-hover-cats_mobile");
const catsMobileItem = document.querySelector(".header__catalog__mobile__cats");

catsMobileItem.addEventListener("click", function() {
    if (subtitleCatalog.style.display === "none") {
        subtitleCatalog.style.display = "grid";
    } else {
        subtitleCatalog.style.display = "none";
    }
});

// mobile menu (hamburger)
const buttonHamburger = document.querySelector(".header__navigation__menu");
const mobileNavigation = document.querySelector(".header__navigation__mobile");

buttonHamburger.addEventListener("click", function() {
    if (mobileNavigation.style.display === "none") {
        mobileNavigation.style.display = "block";
    } else {
        mobileNavigation.style.display = "none";
    }
});

// Hover menu
const catsCategory = document.querySelector(".menu-hover-cats");
const catsMenuItem = document.querySelector(".catalog-hover");

catsMenuItem.addEventListener("mouseover", function() {
    catsCategory.style.display = "grid";
});
catsMenuItem.addEventListener("mouseout", function() {
    catsCategory.style.display = "none";
});