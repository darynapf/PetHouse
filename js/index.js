//mobile button catalog show/hide
const buttonToCatalog = document.querySelector(".header__button-catalog");
const mobileCatalog = document.querySelector(".header__catalog__mobile");

buttonToCatalog.addEventListener("click", function() {
    if (mobileCatalog.style.display === "none") {
        mobileCatalog.style.display = "grid";
    } else {
        mobileCatalog.style.display = "none";
    }
});