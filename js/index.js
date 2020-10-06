let products = [];

async function LoadData() {
    products = await (await fetch("products.json")).json();
}

LoadData().then(() => {
    products.forEach((v, i) => {
        if (i < 4) {
            $('#popularItem').tmpl(v).appendTo('#popularOffers');
        }
    });
});

new Glide(".glide", {
    autoplay: 4000,
    type: "carousel",
    animationDuration: 3000,
}).mount();

new Glide(".glide-2", {
    type: "slider",
    animationDuration: 3000,
    perView: 3,
    breakpoints: {
        320: {
            perView: 1
        },
        768: {
            perView: 1
        },
        1024: {
            perView: 2
        },
        1280: {
            perView: 3
        }
    }
}).mount();

// mobile button catalog show/hide
const buttonToCatalog = document.querySelector(".header__button-catalog");
const mobileCatalog = document.querySelector(".header__catalog__mobile");

buttonToCatalog.addEventListener("click", function() {
    if (!mobileCatalog.style.display || mobileCatalog.style.display === "none") {
        mobileCatalog.style.display = "grid";
    } else {
        mobileCatalog.style.display = "none";
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

$('.header__catalog__mobile__cats').click(function() {
    var backdropHeight = $(document).height();
    $('.backdrop').css('height', backdropHeight);
    $('.backdrop').fadeIn(100, function() {
        $('.menu-modal').fadeIn(200);
    });
});

$('#close-btn').click(function() {
    console.log('tes');
    $('.menu-modal').fadeOut(200, function() {
        $('.backdrop').fadeOut(100);
    });
});