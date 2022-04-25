

const navbarNav = document.querySelectorAll(".arrow-button");
//const btnArrow = document.querySelectorAll(".arrow-button");
console.log(navbarNav)
navbarNav.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        const dropmenu = e.currentTarget.parentElement.nextElementSibling;
        console.log(dropmenu)
        dropmenu.classList.toggle("show-menu");

    });
});