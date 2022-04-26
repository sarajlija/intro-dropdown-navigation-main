

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

//const btns = document.querySelectorAll(".question-btn");
navbarNav.forEach(function (bt) {
    bt.addEventListener("click", function (e) {
        const current = e.currentTarget;
        current.classList.toggle("arrow-up");
    });
})